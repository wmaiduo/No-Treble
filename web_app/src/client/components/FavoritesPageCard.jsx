//this component is used in ./FavoritesPage.jsx
//props.title is a String for the song, props.artist is a String for the name of the singer
//props.cover is the URL link in String for the image of the album, props.preview is the URL link in string for the mp3 file of the song
import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import DeleteIcon from "@mui/icons-material/Delete";
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
    background-color: ${(props) => props.theme.hover};
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

const StyledDelete = styled(DeleteIcon)`
  color: ${(props) => props.theme.primary};
`;

const FavoritesPageCard = (props) => {
  const { addSongsToCurrentPlaylist, replaceCurrentPlaylist } = useContext(
    CurrentPlaylistContext
  );
  const { setActive } = useContext(ActivesContext);
  const { setSearch } = useContext(SearchContext);
  const [deleted, setDeleted] = useState({ state: false });
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
  const onDeleteHandler = () => {
    Promise.resolve(
      axios({
        method: "POST",
        url: "http://localhost:8080/delete",
        data: {
          id: props.id,
        },
      })
    );
    setDeleted({ state: true });
  };

  return (
    <React.Fragment>
      {deleted.state === false ? (
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
          <TableCell align="center">
            <StyledFontDiv>{props.title}</StyledFontDiv>
          </TableCell>
          <TableCell
            onClick={() => {
              setSearch({ value: props.artist });
              setActive("artists");
            }}
          >
            <StyledFontDiv>{props.artist}</StyledFontDiv>
          </TableCell>
          <TableCell align="right">
            <IconButton onClick={onAddHandler}>
              <StyledAdd />
            </IconButton>
          </TableCell>
          <TableCell align="right">
            <IconButton onClick={onDeleteHandler}>
              <StyledDelete />
            </IconButton>
          </TableCell>
        </StyledTableRow>
      ) : null}
    </React.Fragment>
  );
};

export default FavoritesPageCard;
