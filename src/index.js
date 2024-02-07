import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
    <a
            href="https://github.com/thandiwemasuku/reactApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
  </StrictMode>,
);
