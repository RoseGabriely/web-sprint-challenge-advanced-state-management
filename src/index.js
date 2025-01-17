import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import App from "./App";

const { worker } = require("./mocks/browser");
worker.start();

const rootElement = document.getElementById("root");

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
