import React, { useState, useContext } from "react";
import styled from "styled-components";

import { IconButton } from "@mui/material";
import lightMode from "@mui/icons-material/lightMode";
import darkMode from "@mui/icons-material/DarkMode";

import { ThemingContext } from "../providers/ThemingProvider";

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
  margin-left: 2rem;
  font-family: "Monoton", cursive;
  font-size: 3rem;
`;

const Link = styled.a`
  font-family: "Space Mono", monospace;
  display: block;
  color: ${(props) => props.theme.tertiary};
  padding: 3vh 3vh 3vh 5vh;
  text-decoration: none;
  background: ${(props) =>
    props.linkState === "active"
      ? props.theme.primary
      : props.linkState === "hover"
      ? props.theme.secondary
      : "transparent"};
`;

const ButtomDiv = styled.div`
  margin-top: auto;
  margin-bottom: 9vh;
  padding-left: 2em;
`;

const DarkMode = styled(darkMode)`
  color: ${(props) => props.theme.primary};
`;

const LightMode = styled(lightMode)`
  color: ${(props) => props.theme.primary};
`;

function Sidebar() {
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(null);
  const { theme, switchTheme } = useContext(ThemingContext);

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
          <span className="fa fa-home" aria-hidden="true"></span>HOME
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
          <i className="fa fa-heart"></i>FAVORITES
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
          <i className="fa fa-user"></i>ARTISTS
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
          <i className="fa fa-camera"></i>ALBUM
        </Link>
        <ButtomDiv>{mode}</ButtomDiv>
      </SidebarContainer>
    </React.Fragment>
  );
}

export default Sidebar;
