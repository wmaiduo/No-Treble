import React, { Component, useEffect, useContext } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar.jsx";
import Searchbar from "./components/Searchbar.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import MusicPlayer from "./components/MusicPlayer";


import { dummyData2 } from "../dummy_database/dummyAudioListPaths";

import { CurrentPlayListContext } from "./providers/currentPlaylistProvider";

export default function App() {
  const { options, currentAudioLists, addSongsToCurrentPlaylist, replaceCurrentPlaylist } = useContext(CurrentPlayListContext);

  useEffect(() => {
    setTimeout(() => {
      replaceCurrentPlaylist(dummyData2)
    }, 3000);
  }, [replaceCurrentPlaylist]);

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
  );
}
