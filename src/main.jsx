import React from "react";
import ReactDOM from "react-dom";

import Router from "./router/Router";

import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
