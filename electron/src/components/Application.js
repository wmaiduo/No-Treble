import React, { useContext } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import './Application.css'
import Search from "./Search.jsx";
import Artists from './Artists.jsx'
import Loading from "./Loading.jsx";
import Sidebar from "./Sidebar.jsx";
import SearchPage from "./SearchPage.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import FavoritesPage from "./FavoritesPage.jsx";

import { ThemingContext } from "../providers/ThemingProvider.js";
import { ActivesContext } from "../providers/ActiveProvider.js";

const GlobalStyle = createGlobalStyle
`
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

export default function Application() {
  const { theme } = useContext(ThemingContext);
  const { active } = useContext(ActivesContext);
  
  let activePage;
  if (active === "search") {
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
  )
}
