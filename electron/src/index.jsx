import "./index.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./components/Application";
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";
import SearchProvider from "./providers/SearchProvider";
import FavoritesProvider from "./providers/FavoritesProvider";
import ThemingProvider from "./providers/ThemingProvider";
import ActiveProvider from "./providers/ActiveProvider";
import "font-awesome/css/font-awesome.min.css";
import "@fontsource/roboto-mono";
import "@fontsource/alfa-slab-one"
import 'material-icons/iconfont/material-icons.css'

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
)