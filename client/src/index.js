import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { CurrentUserProvider } from "./components/CurrentUserContext";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <CurrentUserProvider>
        <App />
    </CurrentUserProvider>,

    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
