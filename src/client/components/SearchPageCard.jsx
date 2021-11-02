//this component is used in ./SearchPage.jsx
//props.title is a String for the song, props.artist is a String for the name of the singer
//props.cover is the URL link in String for the image of the album, props.preview is the URL link in string for the mp3 file of the song
import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Favorite from "@mui/icons-material/Favorite";
import Add from "@mui/icons-material/Add";
import PlayCircle from "@mui/icons-material/PlayCircle";
import { Avatar, IconButton } from "@mui/material";
import { TableRow, TableCell } from "@mui/material";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";
import { ActivesContext } from "../providers/ActiveProvider";
import { SearchContext } from "../providers/SearchProvider";

const StyledTableRow = styled(TableRow)`
  height: 5vh;
  background-color: ${(props) => props.theme.background};
  :hover {
    background-color: ${(props) => props.theme.hover}
  }
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
  color: ${(props) =>
    props.favorite.state ? props.theme.favorite : props.theme.primary};
`;

const SearchPageCard = (props) => {
  const { addSongsToCurrentPlaylist, replaceCurrentPlaylist } = useContext(
    CurrentPlaylistContext
  );
  const { setActive } = useContext(ActivesContext);
  const { setSearch } = useContext(SearchContext);
  const [favorite, setFavorite] = useState({ state: false });
  const [hover, setHover] = useState(null);
  const onPlayHandler = () => {
    replaceCurrentPlaylist([
      {
        id: props.id,
        name: props.title,
        singer: props.artist,
        cover: props.cover,
        musicSrc: props.preview,
      },
    ]);
  };
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
    setFavorite({ state: true });
  };

  return (
    <StyledTableRow key={props.id}>
      <TableCell align="left">
        {hover === "Avatar" ? (
          <Avatar
            sx={{ width: 50, height: 50 }}
            onMouseEnter={() => setHover("Avatar")}
            onMouseLeave={() => setHover(null)}
          >
            <IconButton onClick={onPlayHandler}>
              <PlayCircle sx={{ width: 50, height: 50 }} />
            </IconButton>
          </Avatar>
        ) : (
          <Avatar
            sx={{ width: 50, height: 50 }}
            src={props.cover}
            alt={props.title}
            onMouseEnter={() => setHover("Avatar")}
            onMouseLeave={() => setHover(null)}
          />
        )}
      </TableCell>
      <TableCell align="left">
        <StyledFontDiv>{props.title}</StyledFontDiv>
      </TableCell>
      <TableCell>
        <StyledFontDiv onClick={() => {
          setActive("artists");
          setSearch({value: props.artist});
        }}>{props.artist}</StyledFontDiv>
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
          <StyledFavorite favorite={favorite} />
        </IconButton>
      </TableCell>
    </StyledTableRow>
  );
};

export default SearchPageCard;
