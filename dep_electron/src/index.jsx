import "./index.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./components/Application";
import 'font-awesome/css/font-awesome.min.css'; 

function render() {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
}
render();