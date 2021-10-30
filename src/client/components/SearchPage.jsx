//this component extracts data from SearchProvider to extract data from API, then each object in the array is passed down to SearchPageCard
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { SearchContext } from "../providers/SearchProvider";

import SearchPageCard from "./SearchPageCard";

import { TableContainer, Table, TableBody } from "@mui/material";

const StyledTableContainer = styled(TableContainer)`
  max-height: 72vh;
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
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
    <StyledTableContainer>
      <Table>
        <TableBody>{musicData ? SearchPageCards : null}</TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default SearchPage;
