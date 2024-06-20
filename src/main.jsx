import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("kartoon-kontainer")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("kartoon-kontainer").style.visibility = "visible";
});