import { useState, useEffect } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

interface DenoDay {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

interface VercelDay {
  date: string;
  count: number;
  color: string;
  intensity: string;
}

const GITHUB_USERNAME = "Pandyashweta";

const getLastYearData = (mappedDays: Activity[]): Activity[] => {
  const dataMap = new Map<string, Activity>();
  mappedDays.forEach(day => {
    dataMap.set(day.date, day);
  });

  const yearData: Activity[] = [];
  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 1);
  startDate.setDate(startDate.getDate() + 1);

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const existing = dataMap.get(dateStr);
    if (existing) {
      yearData.push(existing);
    } else {
      yearData.push({
        date: dateStr,
        count: 0,
        level: 0
      });
    }
  }
  return yearData;
};

const getOfflineFallbackData = (): Activity[] => {
  const fallbackList: Activity[] = [
    { date: "2025-10-15", count: 1, level: 1 },
    { date: "2025-11-20", count: 1, level: 1 },
    { date: "2026-02-13", count: 1, level: 1 },
    { date: new Date().toISOString().split("T")[0], count: 5, level: 3 }
  ];
  return getLastYearData(fallbackList);
};

export default function GithubContributions({ onLoadComplete }: { key?: any; onLoadComplete?: () => void }) {
  const [data, setData] = useState<Activity[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOfflineFallback, setIsOfflineFallback] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!loading) {
      onLoadComplete?.();
    }
  }, [loading, onLoadComplete]);

  const fetchContributions = async () => {
    setLoading(true);
    setErrorMsg(null);
    setIsOfflineFallback(false);

    const denoUrl = `https://github-contributions-api.deno.dev/${GITHUB_USERNAME}.json`;
    const vercelUrl = `https://github-contributions.vercel.app/api/v1/${GITHUB_USERNAME}`;
    const currentYear = new Date().getFullYear();

    try {
      console.log(`[GitHubCalendar] Fetching primary API: ${denoUrl}`);
      const res = await fetch(denoUrl);
      if (!res.ok) throw new Error(`Primary API responded with status ${res.status}`);

      const rawData = await res.json();
      if (!rawData.contributions || !Array.isArray(rawData.contributions)) {
        throw new Error("Invalid structure from Deno API");
      }

      const mappedDays: Activity[] = rawData.contributions.flat().map((day: DenoDay) => {
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        switch (day.contributionLevel) {
          case "FIRST_QUARTILE": level = 1; break;
          case "SECOND_QUARTILE": level = 2; break;
          case "THIRD_QUARTILE": level = 3; break;
          case "FOURTH_QUARTILE": level = 4; break;
          default: level = 0;
        }
        return {
          date: day.date,
          count: day.contributionCount,
          level,
        };
      });

      const lastYearData = getLastYearData(mappedDays);
      setData(lastYearData);
      setLoading(false);
      return;
    } catch (primaryErr) {
      console.warn("[GitHubCalendar] Primary API failed, trying fallback. Error:", primaryErr);

      try {
        console.log(`[GitHubCalendar] Fetching fallback API: ${vercelUrl}`);
        const res = await fetch(vercelUrl);
        if (!res.ok) throw new Error(`Fallback API responded with status ${res.status}`);

        const rawData = await res.json();
        if (!rawData.contributions || !Array.isArray(rawData.contributions)) {
          throw new Error("Invalid structure from Vercel API");
        }

        const mappedDays: Activity[] = rawData.contributions.map((day: VercelDay) => {
          const level = Math.min(Math.max(parseInt(day.intensity) || 0, 0), 4) as 0 | 1 | 2 | 3 | 4;
          return {
            date: day.date,
            count: day.count,
            level,
          };
        });

        const lastYearData = getLastYearData(mappedDays);
        setData(lastYearData);
        setLoading(false);
        return;
      } catch (fallbackErr) {
        console.error("[GitHubCalendar] Both APIs failed. Loading offline snapshot fallback. Error:", fallbackErr);

        setData(getOfflineFallbackData());
        setIsOfflineFallback(true);
        setErrorMsg("Live sync offline. Showing recent snapshot.");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[120px] py-4 animate-pulse">
        <div className="text-[#666666] text-xs font-mono mb-2">Loading contribution graph...</div>
        <div className="w-full h-24 bg-[#121212] rounded-lg border border-[#161616]" />
      </div>
    );
  }

  const totalContributions = data ? data.reduce((sum, day) => sum + day.count, 0) : 0;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center text-[11px] font-sans">
        <span className="text-[#888888] font-medium">
          {totalContributions} contributions in the last year
        </span>
        {isOfflineFallback && (
          <span
            className="text-amber-500/70 hover:text-amber-500 transition-colors font-mono cursor-pointer flex items-center gap-1"
            onClick={fetchContributions}
            title={errorMsg || "Offline"}
          >
            ⚠️ Offline snapshot (Click to retry)
          </span>
        )}
      </div>

      <div className="w-full overflow-x-auto select-none flex justify-start items-center">
        <div className="w-max py-1">
          <ActivityCalendar
            data={data || []}
            theme={customTheme}
            labels={{
              totalCount: `{{count}} contributions in the last year`,
            }}
            showColorLegend={true}
            showMonthLabels={true}
            showTotalCount={false}
            blockSize={10}
            blockMargin={3}
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
}
