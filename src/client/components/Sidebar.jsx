import React, { useState, useContext } from "react";
import styled from "styled-components";

import { IconButton } from "@mui/material";

import lightMode from "@mui/icons-material/lightMode";
import darkMode from "@mui/icons-material/DarkMode";
import Home from "@mui/icons-material/Home";
import Favorite from "@mui/icons-material/Favorite";
import Person from "@mui/icons-material/Person";
import Album from "@mui/icons-material/Album";

import { ThemingContext } from "../providers/ThemingProvider";
import { ActivesContext } from "../providers/ActiveProvider";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border-left: 0;
  width: 25%;
  background-color: ${(props) => props.theme.main};
  height: 100vh;
  overflow: auto;
  border-right: 5px solid ${(props) => props.theme.primary};
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
  display: flex;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 2vw;
  margin-right: 2vw;
  font-family: "Monoton", cursive;
  font-size: 2vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  font-family: "Space Mono", monospace;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props) => props.theme.tertiary};
  text-decoration: none;
  background: ${(props) =>
    props.linkState === "active"
      ? props.theme.primary
      : props.linkState === "hover"
      ? props.theme.secondary
      : "transparent"};
  @media screen and (min-width: 561px) {
    padding: 3vh 3vh 3vh 5vh;
  }
  @media screen and (max-width: 560px) {
    padding: 0;
    margin: auto;
  }
`;

const Span = styled.span`
  margin-left: 2vw;
  @media screen and (max-width: 1050px) {
    font-size: 1.2vw;
  }
  @media screen and (max-width: 890px) {
    display: none;
  }
`;

const ButtomDiv = styled.div`
  margin-top: auto;
  margin-bottom: 9vh;
  @media screen and (min-width: 561px) {
    margin-left: 2em;
  }
  @media screen and (max-width: 560px) {
    margin: auto;
  }
`;

const DarkMode = styled(darkMode)`
  color: ${(props) => props.theme.primary};
`;

const LightMode = styled(lightMode)`
  color: ${(props) => props.theme.primary};
`;

function Sidebar() {
  const [hover, setHover] = useState(null);
  const { theme, switchTheme } = useContext(ThemingContext);
  const { active, setActive } = useContext(ActivesContext);

  let mode;
  if (theme.name === "light") {
    mode = (
      <IconButton onClick={() => switchTheme()}>
        <LightMode />
      </IconButton>
    );
  } else if (theme.name === "dark") {
    mode = (
      <IconButton onClick={() => switchTheme()}>
        <DarkMode />
      </IconButton>
    );
  }

  return (
    <React.Fragment>
      <SidebarContainer>
        <Heading>NOTREBLE</Heading>
        <Link
          onClick={() => setActive("home")}
          onMouseEnter={() => setHover("home")}
          onMouseLeave={() => setHover(null)}
          linkState={
            active === "home" ? "active" : hover === "home" ? "hover" : null
          }
        >
          <Home />
          <Span>HOME</Span>
        </Link>
        <Link
          href="#"
          onClick={() => setActive("favorites")}
          onMouseEnter={() => setHover("favorites")}
          onMouseLeave={() => setHover(null)}
          linkState={
            active === "favorites"
              ? "active"
              : hover === "favorites"
              ? "hover"
              : null
          }
        >
          <Favorite />
          <Span>FAVORITES</Span>
        </Link>
        <Link
          href="#"
          onClick={() => setActive("artists")}
          onMouseEnter={() => setHover("artists")}
          onMouseLeave={() => setHover(null)}
          linkState={
            active === "artists"
              ? "active"
              : hover === "artists"
              ? "hover"
              : null
          }
        >
          <Person />
          <Span>ARTISTS</Span>
        </Link>
        <Link
          href="#"
          onClick={() => setActive("album")}
          onMouseEnter={() => setHover("album")}
          onMouseLeave={() => setHover(null)}
          linkState={
            active === "album" ? "active" : hover === "album" ? "hover" : null
          }
        >
          <Album />
          <Span>ALBUM</Span>
        </Link>
        <ButtomDiv>{mode}</ButtomDiv>
      </SidebarContainer>
    </React.Fragment>
  );
}

export default Sidebar;