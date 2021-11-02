import React, { useContext } from "react";
import styled from "styled-components";

import { Avatar } from "@mui/material";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  margin: 5vh 5vh 5vh 5vh;
`;

const StyledFontDiv = styled.div`
  color: ${(props) => props.theme.tertiary};
  font-family: "Space Mono", monospace;
  font-size: large;
`;

const ArtistsPageCard = (props) => {
  return (
    <StyledDiv
      onClick={() =>
        props.setPageState({ state: "songs", selectedArtistID: props.id })
      }
    >
        <Avatar src={props.image} sx={{ width: 150, height: 150 }} />
        <StyledFontDiv>{props.name}</StyledFontDiv>
    </StyledDiv>
  );
};

export default ArtistsPageCard;
