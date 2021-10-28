import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";
import SearchProvider from "./providers/SearchProvider";
import FavoriteProvider, { FavoritesContext } from "./providers/FavoritesProvider";
import 'font-awesome/css/font-awesome.min.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <CurrentPlayListProvider>
    <SearchProvider>
      <FavoriteProvider>
      <App />
      </FavoriteProvider>
    </SearchProvider>
  </CurrentPlayListProvider>,
  document.getElementById("root")
);
