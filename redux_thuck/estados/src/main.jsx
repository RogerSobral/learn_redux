import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux"; // Importe o Provider
import store from "./store"; // Importe o seu store Redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> {/* Envolva a aplicação com o Provider */}
    <App />
  </Provider>
);
