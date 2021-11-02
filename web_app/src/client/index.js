import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";
import SearchProvider from "./providers/SearchProvider";
import FavoritesProvider from "./providers/FavoritesProvider";
import ThemingProvider from "./providers/ThemingProvider";
import ActiveProvider from "./providers/ActiveProvider";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <CurrentPlayListProvider>
    <ThemingProvider>
      <ActiveProvider>
        <FavoritesProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </FavoritesProvider>
      </ActiveProvider>
    </ThemingProvider>
  </CurrentPlayListProvider>,
  document.getElementById("root")
);
