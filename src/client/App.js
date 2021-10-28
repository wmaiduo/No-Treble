import React, { Component, useContext } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import songsdata from "../data/dummydata.json";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage.jsx";

import { ThemingContext } from "./providers/ThemingProvider";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.main};
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
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="layout">
          <Sidebar />
          <div className="container">
            <Search />
            {/* <Cards data={state.songs} /> */}
            <SearchPage />
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
