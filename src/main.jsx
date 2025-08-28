// main.jsx or App.jsximport React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/undervisning-react-router/"}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
