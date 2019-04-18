import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import serviceWorker from "./serviceWorker";

import store from "./store";
import { Provider } from "react-redux";

// const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker();
