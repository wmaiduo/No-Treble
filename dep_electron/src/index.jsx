import "./index.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./components/Application";


function render() {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
}
render();