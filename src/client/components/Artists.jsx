import React, { useEffect, useState} from "react";


const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState("")

  const onChangeHandler = (e) => {
    setQuery({ value: e.target.value });
  };

useEffect(() => {
    DZ.api(`/search/artist?q=${query.value}`, function (res) {
      if (res.data) {
        setArtists(res.data);
      } else if (!res.data) {
        setArtists([]);
      }
    });
  }, [query]);

  const artistlist = artists.map((artist) => (
    <div key={artist.id}>
      {artist.name}
      <img src={artist.picture} />
      {artist.nb_fan}
      {artist.nb_album}
    </div>
  ));
console.log(artists);
  return (
    <li>
      <input
        type="text"
        placeholder="Search for Atists"
        onChange={onChangeHandler}
      ></input>
      {artistlist}
    </li>
  );
};

export default Artists;
