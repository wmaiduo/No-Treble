//this file shows the an example of how to use context of CurrentPlaylistProvider

import React, { useEffect, useContext } from "react";
import { CurrentPlayListContext } from "./providers/currentPlaylistProvider";

import "./app.css";
import MusicPlayer from "./components/MusicPlayer";

import { dummyData2, dummyData3 } from "../dummy_database/dummyAudioListPaths";

export default function MusicPlayerContextUsageExample() {
  const { options, currentAudioLists, addSongsToCurrentPlaylist, replaceCurrentPlaylist, setOptions } = useContext(CurrentPlayListContext);

  //after 3 seconds, songs in dummyData2 would be added to the currentAudioLists
  useEffect(() => {
    setTimeout(() => {
        addSongsToCurrentPlaylist(dummyData2)
    }, 3000);
  }, [setOptions]);

  //after 6 seconds, dummyData3 would replace the array of currentAudioLists
  useEffect(() => {
    setTimeout(() => {
        replaceCurrentPlaylist(dummyData3)
    }, 8000);
  }, [setOptions]);

  return (
      <div className="layout">
          {console.log("options: ", options)}
          {console.log("currentAudioLists: ", currentAudioLists)}
        <MusicPlayer />
      </div>
  );
}
