//this component is used in ./SearchPage.jsx
//props.title is a String for the song, props.artist is a String for the name of the singer
//props.cover is the URL link in String for the image of the album, props.preview is the URL link in string for the mp3 file of the song
import React, { useContext, useEffect } from "react";

import Add from "@mui/icons-material/Add";
import Favorite from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";
import { FavoriteContext } from "../providers/FavoriteProvider";

const SearchPageCard = (props) => {
  const { addSongsToCurrentPlaylist } = useContext(CurrentPlaylistContext);
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const onAddHandler = () => {
    addSongsToCurrentPlaylist([
      {
        name: props.title,
        singer: props.artist,
        cover: props.cover,
        musicSrc: () => {
          return Promise.resolve(props.preview);
        },
      },
    ]);
  };

  const onFavoriteHandler = () => {
    if (!favorites.includes(props.id))
      setFavorites((prev) => [...prev, props.id]);
  };

  useEffect(() => {
    console.log(favorites);
  }, [favorites])

  return (
    <li>
      <img src={props.cover} /> {props.title} - {props.artist}{" "}
      <IconButton onClick={onAddHandler}>
        <Add />
      </IconButton>
      <IconButton onClick={onFavoriteHandler}>
        <Favorite />
      </IconButton>
    </li>
  );
};

export default SearchPageCard;
