// main.jsx or App.jsximport React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/undervisning-react-router/"}
    >
      <App />
    </BrowserRouter>
  </.StrictMode>
);
