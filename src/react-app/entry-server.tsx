import { renderToString } from "react-dom/server";
import App from "./App";

/** Rendu statique de l'application pour le prérendu SEO/GEO. */
export function render(): string {
  return renderToString(<App />);
}
