//this component extracts data from SearchProvider to extract data from API, then each object in the array is passed down to SearchPageCard
import React, { useContext, useEffect } from "react";

import { SearchContext } from "../providers/SearchProvider";

import SearchPageCard from "./SearchPageCard";

const SearchPage = () => {
  const { musicData } = useContext(SearchContext);
  const SearchPageCards = musicData ? musicData.map((musicDatum) => <SearchPageCard key={musicDatum.id} id={musicDatum.id} title={musicDatum.title} artist={musicDatum.artist.name} cover={musicDatum.album.cover_small} preview={musicDatum.preview}/>) : null;

  return (
      <ul>
          {musicData ? SearchPageCards : null}
      </ul>
  );
};

export default SearchPage;
