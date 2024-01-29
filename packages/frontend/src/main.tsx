import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./view/app.component";

const mountElement: HTMLElement | null = document.getElementById("root");

if (!mountElement) {
  throw new Error(`Can't find dom element with id="root"`);
}

createRoot(mountElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
