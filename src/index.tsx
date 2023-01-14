import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";
import reducer from "./ducks";

import "./index.css";

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
