//this component extracts data from SearchProvider to extract data from API, then each object in the array is passed down to SearchPageCard
import React, { useContext, useState } from "react";
import axios from "axios";

import FavoritesPageCard from "./FavoritesPageCard";

import { ActivesContext } from "../providers/ActiveProvider";

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

  let FavoritesPageCards = <p>Loading</p>;
  if (axiosState.state === "Acquired") {
    FavoritesPageCards = axiosState.data.map((datum) => (
      <FavoritesPageCard
        cover={datum.cover}
        title={datum.name}
        artist={datum.singer}
      />
    ));
  }

  return <ul>{FavoritesPageCards}</ul>;
};

export default FavoritesPage;
