import React, { useContext } from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import "./Application.css";
import Sidebar from "./Sidebar.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Search from "./Search.jsx";
import SearchPage from "./SearchPage.jsx";
import FavoritesPage from "./FavoritesPage.jsx";
import ArtistsPage from "./ArtistsPage.jsx";

import { ThemingContext } from "../providers/ThemingProvider.js";
import { ActivesContext } from "../providers/ActiveProvider.js";

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
  } else if (active === "artists") {
    activePage = <ArtistsPage />;
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
