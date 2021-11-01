//This component sends request to API to extract data,
//the data is then saved with SearchProvider.js
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import cancel from "@mui/icons-material/Cancel";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";

import { SearchContext } from "../providers/SearchProvider";
import { ActivesContext } from "../providers/ActiveProvider";

import returnClosestTracksArray from "../utils/returnClosestTracksArray";

const StyledSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroud};
  width: 100%;
  height: 15;
  padding: 5vh;
`;

const Cancel = styled(cancel)`
  color: ${(props) => props.theme.secondary};
  margin-left: 5vh;
`;

const Search = () => {
  const [search, setSearch] = useState({ value: "" });
  const { setMusicData, setArtistData, setFavoritesData } =
    useContext(SearchContext);
  const { active } = useContext(ActivesContext);

  const onChangeHandler = (e) => {
    setSearch({ value: e.target.value });
  };

  const onClickHandler = (e) => {
    setSearch({ value: "" });
  };

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      DZ.api(`/search?q=${search.value}`, function (res) {
        setMusicData(res.data);
      });
    }, 250);
    return () => clearTimeout(timeOutID);
  }, [search]);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      DZ.api(`/search/artist?q=${search.value}`, function (res) {
        if (res.data) {
          setArtistData(res.data);
        } else if (!res.data) {
          setArtistData([]);
        }
      });
    }, 250);
    return () => clearTimeout(timeOutID);
  }, [search]);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      axios
        .get("http://localhost:8080/favourites")
        .then((res) => {
          if (search.value === "") {
            setFavoritesData(res.data.reverse());
          } else {
            setFavoritesData(returnClosestTracksArray(search.value, res.data))
          }
        });
    }, 250);
    return () => clearTimeout(timeOutID);
  }, [search]);

  let placeHolder = "";
  if (active === "home") {
    placeHolder = "Find Your Favorite Song";
  } else if (active === "artists") {
    placeHolder = "Find Your Favorite Artist";
  } else if (active === "favorites") {
    placeHolder = "Find Your Song In Your Favorite Playlist"
  }

  return (
    <React.Fragment>
      <StyledSearchDiv>
        <OutlinedInput
          sx={{
            width: "100%",
            maxWidth: "50vw",
            height: "3rem",
            borderRadius: "20px",
            background: "white",
            backgroundSize: "3rem 3rem",
          }}
          placeholder={placeHolder}
          value={search.value}
          onChange={onChangeHandler}
          endAdornment={
            <InputAdornment position="end">
              {search.value && (
                <IconButton onClick={onClickHandler}>
                  <Cancel />
                </IconButton>
              )}
            </InputAdornment>
          }
        />
      </StyledSearchDiv>
    </React.Fragment>
  );
};

export default Search;
