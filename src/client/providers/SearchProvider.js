//This context is created to store the information returned from DeezerAPI and is needed for rendering
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export default function SearchProvider(props) {
  //initialize with null since the search bar is empty in the beginning
  const [search, setSearch] = useState({value: ""});
  const [musicData, setMusicData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [favorites, setFavoritesData] = useState([]);

  //SetMusicData is used in Search.jsx
  const ProviderData = { musicData, setMusicData, artistData, setArtistData, favorites, setFavoritesData, search, setSearch };

  return (
    <SearchContext.Provider value={ProviderData}>
      {props.children}
    </SearchContext.Provider>
  );
}
