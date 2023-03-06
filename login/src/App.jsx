import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import LoginPage from "./components/Loginpage";

const App = () => (
  <BrowserRouter>
    <div className="">
      <LoginPage />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
