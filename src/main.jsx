import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// lenis for smooth scrolling
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import App from "./App";

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});
// Listen for the scroll event and log the event data
lenis.on("scroll", () => {});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
