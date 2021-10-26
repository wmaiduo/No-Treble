import React, { useState, useEffect } from "react";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import {
  dummyData1,
  dummyData2,
  dummyData3, 
} from "./MusicPlayerDummyData/dummyAudioListPaths";

const MusicPlayer = () => {
  const [audioLists, setAudioLists] = useState(dummyData1);
  const [options, setOptions] = useState({
    theme: "dark",
    mode: "full",
    remove: true,
    autoPlay: true,
    quietUpdate: true,
    clearPriorAudioLists: true,
    audioLists: audioLists,
    defaultVolume: 0.5,
  });

  //the following example shows when we try to add music to the existing playlist
  useEffect(() => {
    setTimeout(() => {
      setOptions({
        ...options,
        audioLists: [...audioLists, ...dummyData2],
        clearPriorAudioLists: false,
      });
      setAudioLists([...audioLists, ...dummyData2]);
    }, 3000);
  }, [setOptions]);

  //the following example show when we try to replace the current playlist with a new playlist
  useEffect(() => {
    setTimeout(() => {
      setOptions({
        ...options,
        audioLists: [...dummyData3],
        clearPriorAudioLists: true,
      });
      setAudioLists([...dummyData3]);
    }, 6000);
  }, [setOptions]);

  return <ReactJkMusicPlayer {...options} />;
};

export default MusicPlayer;
