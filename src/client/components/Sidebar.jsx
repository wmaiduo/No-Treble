import React from "react";

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
  color: #04aa6d;
  display: flex;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 5rem;
  margin-left: 2rem;
  font-family: 'Monoton', cursive, Times;
  font-size: 3rem;
`;

function Sidebar() {
  return (
    <SidebarContainer className="sidebar">
      <Heading>NO TREBLE</Heading>
      <a className="active" href="#home">
        <span className="fa fa-home" aria-hidden="true"></span>Home
      </a>
      <a href="#">
        <i className="fa fa-heart"></i>Favourites
      </a>
      <a href="#">
        <i className="fa fa-user"></i>Artists
      </a>
      <a href="#">
        <i className="fa fa-camera"></i>Album{" "}
      </a>
    </SidebarContainer>
  );
}

export default Sidebar;
