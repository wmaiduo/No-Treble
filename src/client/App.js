import React, { Component, useEffect, useContext } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar.jsx";
import Searchbar from "./components/Searchbar.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import MusicPlayer from "./components/MusicPlayer";
import MusicPlayerContextUsageExample from "./MusicPlayerContextUsageExample";

export default function App() {
  return (
      <div className="layout">
        <Sidebar />
        <div className="container">
          <Searchbar />
          <Cards />
          <Controller />
        </div>
        <MusicPlayer />
      </div>

      // uncomment the line below and comment things above to see how MusicPlayerContextUsageExample work
      // <MusicPlayerContextUsageExample />
  );
}
