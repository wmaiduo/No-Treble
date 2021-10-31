import React, { useContext } from "react";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import "./app.css";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";
import FavoritesPage from "./components/FavoritesPage";
import Loading from "./components/Loading";

import { ThemingContext } from "./providers/ThemingProvider";
import { ActivesContext } from "./providers/ActiveProvider";
import Artists from './components/Artists'

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
  const { theme } = useContext(ThemingContext);
  const { active } = useContext(ActivesContext);

  let activePage;
  if (active === "home") {
    activePage = <SearchPage />;
  } else if (active === "favorites") {
    activePage = <FavoritesPage />;
  }
 else if (active === "artists") {
  activePage = <Artists/>;
}

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="layout">
          <Sidebar />
          <div className="container">
            <Search />
            {activePage}
          </div>
          <MusicPlayer />
        </div>
      </ThemeProvider>     
    </React.Fragment>
  );
};

export default App;
