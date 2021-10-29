//this component is used in ./SearchPage.jsx
//props.title is a String for the song, props.artist is a String for the name of the singer
//props.cover is the URL link in String for the image of the album, props.preview is the URL link in string for the mp3 file of the song
import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../providers/FavoritesProvider";
import Favorite from "@mui/icons-material/Favorite";

import Add from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";
import axios from "axios";

const SearchPageCard = (props) => {
  const { addSongsToCurrentPlaylist } = useContext(CurrentPlaylistContext);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const onClickHandler = () => {
    addSongsToCurrentPlaylist([
      {
        id: props.id,
        name: props.title,
        singer: props.artist,
        cover: props.cover,
        musicSrc: props.preview,
      },
    ]);
  };
  const onFavoriteHandler = () => {
    Promise.resolve(
      axios({
        method: "POST",
        url: "http://localhost:8080/favourite",
        data: {
          name: props.title,
          singer: props.artist,
          cover: props.cover,
          musicSrc: props.preview,
        },
      })
    );
  };

  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:8080/favorites`,setFavorites)
  //     .then((response) => {
  //       console.log(response);
  //       // setFavorites
  //     })
  //     .catch((err)=> console.log(err));

  // },[favorites])

  return (
    <li>
      <img src={props.cover} /> {props.title} - {props.artist}{" "}
      <IconButton onClick={onClickHandler}>
        <Add />
      </IconButton>
      <IconButton onClick={onFavoriteHandler}>
        <Favorite />
      </IconButton>
    </li>
  );
};

export default SearchPageCard;
