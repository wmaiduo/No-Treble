import React, { useContext } from "react";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";

const MusicPlayer = () => {
  const { options, removeSongFromCurrentPlaylist } = useContext(CurrentPlaylistContext);
  const onAudioListsChange = (currentPlayId, audioLists, audioInfo) => {
    removeSongFromCurrentPlaylist(audioLists);
  };

  return (
    <ReactJkMusicPlayer {...options} onAudioListsChange={onAudioListsChange} />
  );
};

export default MusicPlayer;
