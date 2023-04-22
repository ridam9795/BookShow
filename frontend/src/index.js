import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router } from "react-router-dom";
import BookShowProvider from "./Context/BookShowProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BookShowProvider>
    <Router>
      <App />
    </Router>
  </BookShowProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
