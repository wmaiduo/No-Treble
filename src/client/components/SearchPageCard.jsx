//this component is used in ./SearchPage.jsx
//props.title is a String for the song, props.artist is a String for the name of the singer
//props.cover is the URL link in String for the image of the album, props.preview is the URL link in string for the mp3 file of the song
import React, { useContext, useState } from "react";
import styled from "styled-components";

import { FavoritesContext } from "../providers/FavoritesProvider";
import Favorite from "@mui/icons-material/Favorite";

import Add from "@mui/icons-material/Add";
import { Avatar, IconButton } from "@mui/material";
import { TableRow, TableCell } from "@mui/material";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";
import axios from "axios";

const StyledTableRow = styled(TableRow)`
  height: 7vh;
  background-color: ${(props) => props.theme.background};
`;

const StyledFontDiv = styled.div`
  color: ${(props) => props.theme.tertiary};
  font-family: "Space Mono", monospace;
  font-size: large;
`;

const StyledAdd = styled(Add)`
  color: ${(props) => props.theme.primary};
`;
const StyledFavorite = styled(Favorite)`
  color: ${(props) => props.favorited.state ? props.theme.favorite : props.theme.primary};
`;

const SearchPageCard = (props) => {
  const { addSongsToCurrentPlaylist } = useContext(CurrentPlaylistContext);
  const [favorited, setFavorited] = useState({state: false});
  const onAddHandler = () => {
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
    setFavorited({state: true});
  };

  return (
    <StyledTableRow key={props.id}>
      <TableCell align="left">
        <Avatar
          sx={{ width: 50, height: 50 }}
          src={props.cover}
          alt={props.title}
        />
      </TableCell>
      <TableCell align="center">
        <StyledFontDiv>{props.title}</StyledFontDiv>
      </TableCell>
      <TableCell>
        <StyledFontDiv>{props.artist}</StyledFontDiv>
      </TableCell>
      <TableCell>
        <StyledFontDiv>{props.album}</StyledFontDiv>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={onAddHandler}>
          <StyledAdd />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={onFavoriteHandler}>
          <StyledFavorite favorited={favorited}/>
        </IconButton>
      </TableCell>
    </StyledTableRow>
  );
};

export default SearchPageCard;
