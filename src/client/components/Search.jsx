import React, { useState, useEffect } from "react";

const Search = () => {
  const [search, setSearch] = useState({
    songs: null,
    loading: false,
    value: "",
  });

  const onChangeHandler = (e) => {
    setSearch({
        ...search,
        value: e.target.value
    });
  };

  useEffect(() => {
    console.log(search);
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
