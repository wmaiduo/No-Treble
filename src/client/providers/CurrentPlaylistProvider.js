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

  //use the following function if you want to add songs to the current playlist without stopping the song playing
  //input: array of objects in the format of:
    //   [
    //     {
    //       name: "Fly Me to the Moon",
    //       singer: "The Macarons Project",
    //       cover:
    //         "https://e-cdns-images.dzcdn.net/images/cover/f0bc5ad6c844e59f7e832b1b4085ec4b/500x500-000000-80-0-0.jpg",
    //       musicSrc: () => {
    //         return Promise.resolve(
    //           "https://cdns-preview-c.dzcdn.net/stream/c-c2a6681b22273c0b5266a0c969574142-6.mp3"
    //         );
    //       },
    //     },
    //   ];
  const addSongsToCurrentPlaylist = (playlist) => {
    setOptions({
      ...options,
      audioLists: [...currentAudioLists, ...playlist],
      clearPriorAudioLists: false,
    });
    setCurrentAudioLists([...currentAudioLists, ...playlist]);
  };

  //use the following function if you want to replace the current playlist and interrupts the current playing song
    //input: array of objects in the format of:
    //   [
    //     {
    //       name: "Fly Me to the Moon",
    //       singer: "The Macarons Project",
    //       cover:
    //         "https://e-cdns-images.dzcdn.net/images/cover/f0bc5ad6c844e59f7e832b1b4085ec4b/500x500-000000-80-0-0.jpg",
    //       musicSrc: () => {
    //         return Promise.resolve(
    //           "https://cdns-preview-c.dzcdn.net/stream/c-c2a6681b22273c0b5266a0c969574142-6.mp3"
    //         );
    //       },
    //     },
    //   ];
  const replaceCurrentPlaylist = (playlist) => {
    setOptions({
      ...options,
      audioLists: [...playlist],
      clearPriorAudioLists: true,
    });
    setCurrentAudioLists([...playlist]);
  };

  const providerData = {
    options,
    currentAudioLists,
    addSongsToCurrentPlaylist,
    replaceCurrentPlaylist,
    setOptions
  };

  return (
    <CurrentPlayListContext.Provider value={providerData}>
      {props.children}
    </CurrentPlayListContext.Provider>
  );
}
