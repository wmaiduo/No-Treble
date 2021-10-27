import React, { useContext } from "react";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import { CurrentPlayListContext } from "../providers/currentPlaylistProvider";

const MusicPlayer = () => {
  const { options } = useContext(CurrentPlayListContext);
  console.log("options:", options)
  return <ReactJkMusicPlayer {...options} />;
};

export default MusicPlayer;
