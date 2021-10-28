import React, { useState, useEffect } from "react";

import styled from "styled-components";

const SidebarContainer = styled.div`
  margin: 0;
  padding: 0;
  border-left: 0;
  width: 25%;
  background-color: #19283d;
  height: 100vh;
  overflow: auto;
  border-right: 5px solid #04aa6d;
`;

const Heading = styled.h1`
  color: #04AA6d;
  display: flex;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
  font-family: "Monoton", cursive;
  font-size: 3rem;
`;

const Link = styled.a`
  font-family: 'Space Mono', monospace;
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
  background: ${(props) =>
    props.linkState === "active"
      ? "#04AA6D"
      : props.linkState === "hover"
      ? "#555"
      : "transparent"};
`;

// .sidebar a {
//   display: block;
//   color: black;
//   padding: 16px;
//   text-decoration: none;
//   color:white;
// }

// /* Active/current link */
// .sidebar a.active {
//   background-color: #04AA6D;
//   color: white;
// }

// /* Links on mouse-over */
// .sidebar a:hover:not(.active) {
//   background-color: #555;
//   color: white;
// }
// .fa{
//   padding:8px;
// }

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
          <span className="fa fa-home" aria-hidden="true"></span>Home
        </Link>
        <Link
          href="#"
          onClick={() => setActive("favorites")}
          onMouseEnter={() => setHover("favorites")}
          onMouseLeave={() => setHover(null)}
          linkState={
            active === "favorites" ? "active" : hover === "favorites" ? "hover" : null
          }
        >
          <i className="fa fa-heart"></i>Favourites
        </Link>
        <Link
          href="#"
          onClick={() => setActive("artists")}
          onMouseEnter={() => setHover("artists")}
          onMouseLeave={() => setHover(null)}
          linkState={
            active === "artists" ? "active" : hover === "artists" ? "hover" : null
          }
        >
          <i className="fa fa-user"></i>Artists
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
          <i className="fa fa-camera"></i>Album{" "}
        </Link>
      </SidebarContainer>
    </React.Fragment>
  );
}

export default Sidebar;
