import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { SearchContext } from "../providers/SearchProvider";

const Search = () => {
  const [search, setSearch] = useState({ value: "" });
  const {musicData, setMusicData} = useContext(SearchContext);

  const onChangeHandler = (e) => {
    setSearch({ value: e.target.value });
  };

  useEffect(() => {
    // Promise.resolve(
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${search}`)
    // ).then(value => {
    //     console.log(value);
    //     setMusicData({value});
    // })
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

  useEffect(() => {
    console.log("music data shown: ", musicData)
  }, [musicData])

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
