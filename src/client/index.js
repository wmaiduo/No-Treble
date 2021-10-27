import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";
import SearchProvider from "./providers/SearchProvider";
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <CurrentPlayListProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </CurrentPlayListProvider>,
  document.getElementById("root")
);
