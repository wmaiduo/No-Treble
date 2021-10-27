//this component is used in ./SearchPage.jsx
import React, { useContext } from "react";

import Add from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";

const SearchPageCard = (props) => {
  const { addSongsToCurrentPlaylist } = useContext(CurrentPlaylistContext);

  const onClickHandler = () => {
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

  return (
    <li>
      <img src={props.cover} /> {props.title} - {props.artist}{" "}
      <IconButton onClick={onClickHandler}>
        <Add />
      </IconButton>
    </li>
  );
};

export default SearchPageCard;
