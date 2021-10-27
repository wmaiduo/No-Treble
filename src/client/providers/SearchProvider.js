//This context is created because musicData would be needed across different components for searching and rendering purposes
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export default function SearchProvider (props) {
    //initialize with null since the search bar is empty in the beginning
    const [musicData, setMusicData] = useState(null);

    //SetMusicData is used in Search.jsx
    const ProviderData = {musicData, setMusicData};

    return (
        <SearchContext.Provider value={ProviderData}>
            {props.children}
        </SearchContext.Provider>
    )

}
