import React, { Component, useContext, useEffect } from "react";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import "./app.css";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import songsdata from "../data/dummydata.json";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";
import FavoritesPage from "./components/FavoritesPage";

import { ThemingContext } from "./providers/ThemingProvider";
import { ActivesContext } from "./providers/ActiveProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    margin: 0;
    padding: 0;
    border: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => {
  const state = {
    songs: songsdata,
  };
  const { theme } = useContext(ThemingContext);
  const { active } = useContext(ActivesContext);

  let activePage;
  if (active === "search") {
    activePage = <SearchPage />;
  } else if (active === "favorites") {
    activePage = <FavoritesPage />;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="layout">
          <Sidebar />
          <div className="container">
            <Search />
            {/* <Cards data={state.songs} /> */}
            {activePage}
          </div>
          <MusicPlayer />
        </div>
      </ThemeProvider>
    </React.Fragment>
    // uncomment the line below and comment things above until return to see how MusicPlayerContextUsageExample work
    // <MusicPlayerContextUsageExample />
  );
};

export default App;
