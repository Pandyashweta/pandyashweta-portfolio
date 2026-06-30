import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import React from "react";

// Export the render function that prerender.js will import
export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}

// Export the projects data so prerender.js can dynamically inspect routes
export { showcaseProjects, figmaProjects, codingProjects, liveProjects, researchProjects } from "./data/projects";
