import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";
import SearchProvider from "./providers/SearchProvider";
import FavoriteProvider from "./providers/FavoriteProvider";
import ThemeProvider from "./providers/ThemingProvider";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <ThemeProvider>
    <FavoriteProvider>
      <CurrentPlayListProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CurrentPlayListProvider>
    </FavoriteProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
