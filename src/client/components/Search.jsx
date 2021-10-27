import React, { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState({value: "",});
  const [musicData, setMusicData] = useState({})

  const onChangeHandler = (e) => {
    setSearch({value: e.target.value});
  };

  useEffect(() => {
    Promise.resolve(
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${search}`)
    ).then(value => {
        console.log(value);
        setMusicData({value});
    })
  }, [search]);

  return (
    <div className="searchbar">
      <input
        className="input input-shadow"
        placeholder="Find Your Favorite Song"
        value={search.value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
