import React, { createContext, useState } from "react";

export const ActivesContext = createContext();

export default function ActiveProvider (props) {
    //initialize with null since the search bar is empty in the beginning
    const [active, setActive] = useState("home");

    //SetMusicData is used in Search.jsx
    const ProviderData = {active, setActive};

    return (
        <ActivesContext.Provider value={ProviderData}>
            {props.children}
        </ActivesContext.Provider>
    )

}