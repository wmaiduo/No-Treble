import React, { useContext, useEffect } from "react";

import { SearchContext } from "../providers/SearchProvider";

import SearchPageCard from "./SearchPageCard";

const SearchPage = () => {
  const { musicData } = useContext(SearchContext);
  const SearchPageCards = musicData ? musicData.map((musicDatum) => <SearchPageCard key={musicDatum.id} title={musicDatum.title} artist={musicDatum.artist.name} cover={musicDatum.album.cover_small} preview={musicDatum.preview}/>) : null;

  return (
      <ul>
          {musicData ? SearchPageCards : null}
      </ul>
  );
};

export default SearchPage;