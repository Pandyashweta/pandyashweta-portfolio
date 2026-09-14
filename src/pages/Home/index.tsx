import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 sm:p-10 transition-colors duration-300">
      <div className="max-w-2xl w-full py-8 sm:py-12">
        <Hero />
      </div>
    </main>
  );
}
