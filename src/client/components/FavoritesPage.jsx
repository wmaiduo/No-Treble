//this component extracts data from SearchProvider to extract data from API, then each object in the array is passed down to SearchPageCard
import React, { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import FavoritesPageCard from "./FavoritesPageCard";

import { ActivesContext } from "../providers/ActiveProvider";

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

const FavoritesPage = () => {
  const { active } = useContext(ActivesContext);
  const [axiosState, setAxiosState] = useState({
    state: "Loading",
    data: [],
  });

  if (active === "favorites" && axiosState.state === "Loading") {
    Promise.resolve(axios.get("http://localhost:8080/favourites")).then(
      (res) => {
        setAxiosState({
          state: "Acquired",
          data: res.data,
        });
      }
    );
  }

  let FavoritesPageCards;
  if (axiosState.state === "Acquired") {
    FavoritesPageCards = axiosState.data.map((datum) => (
      <FavoritesPageCard
        key={datum._id}
        id={datum._id}
        cover={datum.cover}
        title={datum.name}
        artist={datum.singer}
        preview={datum.musicSrc}
      />
    ));
  }

  return (
    <React.Fragment>
      {axiosState.state === "Acquired" ? (
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
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{FavoritesPageCards}</TableBody>
          </Table>
        </StyledTableContainer>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default FavoritesPage;
