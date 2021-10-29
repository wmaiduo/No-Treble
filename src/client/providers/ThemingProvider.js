//This context is created to store the information returned from DeezerAPI and is needed for rendering
import React, { createContext, useState, useContext } from "react";

import { CurrentPlaylistContext } from "./currentPlaylistProvider";

export const ThemingContext = createContext();

export default function ThemingProvider(props) {
  const { options, setOptions } = useContext(CurrentPlaylistContext);
  //initialize with null since the search bar is empty in the beginning
  const dark = {
    name: "dark",
    main: "#19283d",
    primary: "#04aa6d",
    secondary: "#555",
    tertiary: "#F5FFFA",
    background: "#112035"
  };

  const light = {
    name: "light",
    main: "#E7E5E5",
    primary: "#FF7F11",
    secondary: "#DE7C5A",
    tertiary: "#006D77",
    background: "#EDF6F9",
  };

  const [theme, setTheme] = useState(dark);

  const switchTheme = () => {
    if (theme.name === "light") {
      setTheme(dark);
      setOptions({
        ...options,
        theme: "dark"
      })
    }
    if (theme.name === "dark") {
      setTheme(light);
      setOptions({
        ...options,
        theme: "light"
      })
    }
  };

  //SetMusicData is used in Search.jsx
  const ProviderData = { theme, switchTheme };

  return (
    <ThemingContext.Provider value={ProviderData}>
      {props.children}
    </ThemingContext.Provider>
  );
}
