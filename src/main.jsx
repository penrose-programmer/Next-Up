import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import React from "react";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
