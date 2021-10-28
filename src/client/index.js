import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";
import SearchProvider from "./providers/SearchProvider";
import FavoriteProvider from "./providers/FavoriteProvider";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <FavoriteProvider>
    <CurrentPlayListProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </CurrentPlayListProvider>
  </FavoriteProvider>,
  document.getElementById("root")
);
