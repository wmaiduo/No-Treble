import React, { useState, useEffect } from "react";

import styled from "styled-components";

const SidebarContainer = styled.div`
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

function Sidebar() {
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(null);

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
      </SidebarContainer>
    </React.Fragment>
  );
}

export default Sidebar;
