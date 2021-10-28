import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoriteProvider (props) {
    //initialize with null since the search bar is empty in the beginning
    const [favorites, setFavorites] = useState([]);

    //SetMusicData is used in Search.jsx
    const ProviderData = {favorites, setFavorites};

    return (
        <FavoritesContext.Provider value={ProviderData}>
            {props.children}
        </FavoritesContext.Provider>
    )

}