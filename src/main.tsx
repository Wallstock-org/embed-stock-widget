import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const widgetDivs = document.querySelectorAll(".wallstocks-finance-widget");

widgetDivs.forEach((div) => {
  createRoot(div).render(
    <StrictMode>
      <App clientId={div.id} />
    </StrictMode>
  );
});

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
