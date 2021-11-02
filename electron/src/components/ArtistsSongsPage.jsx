//this component extracts data from SearchProvider to extract data from API, then each object in the array is passed down to SearchPageCard
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SearchPageCard from "./SearchPageCard";
import Loading from "./Loading";

import ArrowBack from "@mui/icons-material/ArrowBack";

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

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  margin-left: 5vw;
  margin-bottom: 2vh;
  height: 4vh;
  width: 13vw;
  max-width: 200px;
  min-width: 100px;
  border-radius: 1em;
  border: 0;
  color: ${(props) => props.theme.tertiary};
  font-family: "Open Sans", sans-serif;
  font-size: 2vh;
`;

const ArtistsSongsPage = (props) => {
  const [songsData, setSongsData] = useState([]);
  useEffect(() => {
    DZ.api(`/artist/${props.id}/top?limit=30`, function (res) {
      if (!res.data) {
        setSongsData([]);
      } else {
        setSongsData(res.data);
      }
    });
  }, []);

  const SearchPageCards = songsData
    ? songsData.map((songsDatum) => (
        <SearchPageCard
          key={songsDatum.id}
          id={songsDatum.id}
          title={songsDatum.title}
          artist={songsDatum.artist.name}
          cover={songsDatum.album.cover_medium}
          album={songsDatum.album.title}
          preview={songsDatum.preview}
        />
      ))
    : null;

  return (
    <React.Fragment>
      <StyledButton
        onClick={() =>
          props.setPageState({ state: "artists", selectedArtistID: null })
        }
      >
        BACK
        <ArrowBack />
      </StyledButton>
      {songsData ? (
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
      ) : (
        <Loading type={"spokes"} />
      )}
    </React.Fragment>
  );
};

export default ArtistsSongsPage;
