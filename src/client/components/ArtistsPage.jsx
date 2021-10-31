import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { Paper, Container } from "@mui/material";

import { SearchContext } from "../providers/SearchProvider";
import { ThemingContext } from "../providers/ThemingProvider";

import ArtistsPageCard from "./ArtistsPageCard";

import Loading from "./Loading";

const StyledContainer = styled.div`
  height: 75vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

const ArtistsPage = () => {
  const { artistData } = useContext(SearchContext);

  const artistlist = artistData.map((artistDatum) => (
    <ArtistsPageCard
      key={artistDatum.id}
      id={artistDatum.id}
      name={artistDatum.name}
      image={artistDatum.picture_medium}
    />
  ));

  return (
    <React.Fragment>
      {artistData ? (
        <StyledContainer>{artistlist}</StyledContainer>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};
export default ArtistsPage;
