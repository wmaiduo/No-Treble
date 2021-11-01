//this component extracts data from SearchProvider to extract data from API, then each object in the array is passed down to SearchPageCard
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SearchPageCard from "./SearchPageCard";
import StyledButton from "./StyledButton";

import deezerToPlayList from "../utils/deezerToPlayList";

import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const StyledTableContainer = styled(TableContainer)`
  max-height: 72vh;
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;

const StyledHeadDiv = styled.div`
  color: ${(props) => props.theme.tertiary};
  font-family: "Oswald", sans-serif;
  font-size: 4vh;
  margin-left: 5vw;
`;

const StyledFontDiv = styled.div`
  color: ${(props) => props.theme.primary};
  font-family: "Alfa Slab One", cursive;
  font-size: large;
`;

const HomePage = () => {
  const [topMusicData, setTopMusicData] = useState([]);
  useEffect(() => {
    DZ.api(`/chart/0`, function (res) {
      setTopMusicData(res.tracks.data);
    });
  }, []);
  const SearchPageCards = topMusicData
    ? topMusicData.map((topMusicDatum) => (
        <SearchPageCard
          key={topMusicDatum.id}
          id={topMusicDatum.id}
          title={topMusicDatum.title}
          artist={topMusicDatum.artist.name}
          cover={topMusicDatum.album.cover_medium}
          album={topMusicDatum.album.title}
          preview={topMusicDatum.preview}
        />
      ))
    : null;

  return (
    <React.Fragment>
      <StyledButton playlist={deezerToPlayList(topMusicData)} />
      <StyledHeadDiv>TOP TRACKS TODAY</StyledHeadDiv>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <StyledFontDiv>COVER</StyledFontDiv>
              </TableCell>
              <TableCell align="center">
                <StyledFontDiv>TITLE</StyledFontDiv>
              </TableCell>
              <TableCell>
                <StyledFontDiv>ARTIST</StyledFontDiv>
              </TableCell>
              <TableCell>
                <StyledFontDiv>ALBUM</StyledFontDiv>
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{SearchPageCards}</TableBody>
        </Table>
      </StyledTableContainer>
    </React.Fragment>
  );
};

export default HomePage;
