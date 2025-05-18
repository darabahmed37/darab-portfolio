import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { StrictMode } from "react";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
