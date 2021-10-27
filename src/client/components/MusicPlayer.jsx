import React, { useContext } from "react";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";

const MusicPlayer = () => {
  const { options } = useContext(CurrentPlaylistContext);
  return <ReactJkMusicPlayer {...options} />;
};

export default MusicPlayer;
