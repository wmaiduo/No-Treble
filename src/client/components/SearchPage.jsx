//this component extracts data from SearchProvider to extract data from API, then each object in the array is passed down to SearchPageCard
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { SearchContext } from "../providers/SearchProvider";

import HomePage from "./HomePage";
import SearchPageCard from "./SearchPageCard";
import Loading from "./Loading";

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

const StyledFontDiv = styled.div`
  color: ${(props) => props.theme.primary};
  font-family: "Alfa Slab One", cursive;
  font-size: large;
`;

const SearchPage = () => {
  const { musicData } = useContext(SearchContext);
  const SearchPageCards = musicData
    ? musicData.map((musicDatum) => (
        <SearchPageCard
          key={musicDatum.id}
          id={musicDatum.id}
          title={musicDatum.title}
          artist={musicDatum.artist.name}
          cover={musicDatum.album.cover_medium}
          album={musicDatum.album.title}
          preview={musicDatum.preview}
        />
      ))
    : null;

  return (
    <React.Fragment>
      {musicData ? (
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <StyledFontDiv>COVER</StyledFontDiv>
                </TableCell>
                <TableCell align="left">
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
      ) : (
        <HomePage />
      )}
    </React.Fragment>
  );
};

export default SearchPage;
