import React, { Component, useEffect, useContext } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage"

import MusicPlayerContextUsageExample from "./MusicPlayerContextUsageExample";

export default function App() {
  return (
      <div className="layout">
        <Sidebar />
        <div className="container">
          <Search />
          <Cards />
          <Controller />
          <SearchPage />
        </div>
        <MusicPlayer />
      </div>

      // uncomment the line below and comment things above until return to see how MusicPlayerContextUsageExample work
      // <MusicPlayerContextUsageExample />
  );
}
