import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Theme from "./theme/theme";
import "./styles/tailwind.css";
import "./styles/base.css";
import store from "./store";
import { Provider } from "react-redux";
import Modal from "./components/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <Modal />
          <Routes />
        </BrowserRouter>
      </Theme>
    </Provider>
  </>
);
