import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Cancel from "@mui/icons-material/Cancel"
import { IconButton } from "@mui/material"

import { SearchContext } from "../providers/SearchProvider";

const Search = () => {
  const [search, setSearch] = useState({ value: "" });
  const {musicData, setMusicData} = useContext(SearchContext);

  const onChangeHandler = (e) => {
    setSearch({ value: e.target.value });
  };

  const onClickHandler = (e) => {
    setSearch({ value: ""})
  }

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      Promise.resolve(

        //https://cors-anywhere.herokuapp.com/ is added to avoid CORS error
        axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${search.value}`
        )
      ).then((res) => {
        if(res.data.error) {
          setMusicData(null);
        } else {
        setMusicData(res.data.data);
        }
      });
    }, 750);
    return () => clearTimeout(timeOutID);
  }, [search]);

  return (
    <div className="searchbar">
      <input
        className="input input-shadow"
        placeholder="Find Your Favorite Song"
        value={search.value}
        onChange={onChangeHandler}
      />
      {search.value && <IconButton onClick={onClickHandler}><Cancel style={{fill: "white"}}/></IconButton>}
    </div>
  );
};

export default Search;
