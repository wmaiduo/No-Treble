import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../providers/SearchProvider";

const Artists = () => {
  const { artistData } = useContext(SearchContext);

  const artistlist = artistData.map((artist) => (
    <div key={artist.id}>
      {artist.name}
      <img src={artist.picture} />
      {artist.nb_fan}
      {artist.nb_album}
    </div>
  ));

  return (
    <li>
      {artistlist}
    </li>
  );
};

export default Artists;
