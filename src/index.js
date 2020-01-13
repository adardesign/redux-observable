import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/configureStore";

const theStore = store();
const appWithProvider = (
  <Provider store={theStore}>
    <App />
  </Provider>
);
ReactDOM.render(appWithProvider, document.getElementById("root"));
