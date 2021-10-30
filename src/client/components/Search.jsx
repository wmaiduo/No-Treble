//This component sends request to API to extract data,
//the data is then saved with SearchProvider.js
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

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
  height: 20vh;
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
      DZ.api(`/search?q=${search.value}`, function(res){
        setMusicData(res.data);
      });
    }, 100);
    return () => clearTimeout(timeOutID);
  }, [search]);

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
