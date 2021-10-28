//This context is created to store the information returned from DeezerAPI and is needed for rendering
import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export default function FavoriteProvider (props) {
    //initialize with null since the search bar is empty in the beginning
    const [favorites, setFavorites] = useState([]);

    //SetMusicData is used in Search.jsx
    const ProviderData = {favorites, setFavorites};

    return (
        <FavoriteContext.Provider value={ProviderData}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
