//This component sends request to API to extract data,
//the data is then saved with SearchProvider.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import cancel from "@mui/icons-material/Cancel";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";

import { SearchContext } from "../providers/SearchProvider";
import { ActivesContext } from "../providers/ActiveProvider";

const StyledSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroud};
  width: 100%;
  padding: 5vh;
`;

const Cancel = styled(cancel)`
  color: ${(props) => props.theme.secondary};
  margin-left: 5vh;
`;

const Search = () => {
  const [search, setSearch] = useState({ value: "" });
  const { setMusicData } = useContext(SearchContext);
  const { setActive } = useContext(ActivesContext);

  const onChangeHandler = (e) => {
    setSearch({ value: e.target.value });
    setActive("search");
  };

  const onClickHandler = (e) => {
    setSearch({ value: "" });
  };

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      Promise.resolve(
        //https://cors-anywhere.herokuapp.com/ is added to avoid CORS error
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${search.value}`)
      ).then((res) => {
        if (res.data.error) {
          setMusicData([]);
        } else {
          setMusicData(res.data.data);
        }
      });
    }, 500);
    return () => clearTimeout(timeOutID);
  }, [search]);

  const myHTML = `
  <script src="https://e-cdns-files.dzcdn.net/js/min/dz.js"></script>
  <script>
    DZ.api('/user/5', function(response){
      console.log("Name of user id 5", response.name);
    });
  </script>`;

  return (
    <React.Fragment>
      <Helmet><div dangerouslySetInnerHTML={{ __html: myHTML }} /></Helmet>
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
          placeholder="Find Your Favorite Song"
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
