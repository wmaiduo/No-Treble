import React, { createContext, useState } from "react";

import { dummyData1 } from "../../dummy_database/dummyAudioListPaths";

export const CurrentPlayListContext = createContext();

export default function CurrentPlayListProvider(props) {
  const [currentAudioLists, setCurrentAudioLists] = useState(dummyData1);
  const [options, setOptions] = useState({
    theme: "dark",
    mode: "full",
    remove: true,
    autoPlay: true,
    quietUpdate: true,
    clearPriorAudioLists: true,
    audioLists: currentAudioLists,
    defaultVolume: 0.5,
  });

  const addSongsToCurrentPlaylist = (songs) => {
      setOptions({
          ...options,
          audioLists: [...currentAudioLists, ...songs],
          clearPriorAudioLists: false,
      })
      setCurrentAudioLists({
          audioLists: [...currentAudioLists, ...songs]
      })
  }

  const replaceCurrentPlaylist = (playlist) => {
      setOptions({
          ...options,
          audioLists: [...playlist],
          clearPriorAudioLists: true,
      })
      setCurrentAudioLists({
          audioLists: [...playlist],
      })
  }

  const providerData = {options, currentAudioLists, addSongsToCurrentPlaylist, replaceCurrentPlaylist}

  return (
      <CurrentPlayListContext.Provider value={providerData}>
          {props.children}
      </CurrentPlayListContext.Provider>
  );
}
