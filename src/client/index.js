import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";
import SearchProvider from "./providers/SearchProvider";
import FavoritesProvider from "./providers/FavoritesProvider";
import ThemeProvider from "./providers/ThemingProvider";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <CurrentPlayListProvider>
    <ThemeProvider>
      <FavoritesProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </FavoritesProvider>
    </ThemeProvider>
  </CurrentPlayListProvider>,
  document.getElementById("root")
);
