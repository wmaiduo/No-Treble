import React, { useState, useContext } from "react";
import styled from "styled-components";

import { CurrentPlaylistContext } from "../providers/currentPlaylistProvider";

import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import BarChart from "@mui/icons-material/BarChart";
import Replay from "@mui/icons-material/Replay";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  margin-left: 5vw;
  margin-bottom: 2vh;
  height: 4vh;
  width: 13vw;
  max-width: 200px;
  min-width: 100px;
  border-radius: 1em;
  border: 0;
  color: ${(props) => props.theme.tertiary};
  font-family: "Open Sans", sans-serif;
  font-size: 2vh;
`;

const StyledButton = (props) => {
  const { replaceCurrentPlaylist } = useContext(CurrentPlaylistContext);
  const [buttonState, setButtonState] = useState("listen");

  return (
    <React.Fragment>
      <Button
        onMouseEnter={() => {
          if (buttonState !== "playing") {
            setButtonState("play");
          } else {
            setButtonState("replay");
          }
        }}
        onMouseLeave={() => {
          if (buttonState === "play") {
            setButtonState("listen");
          }
          if (buttonState === "replay") {
            setButtonState("playing");
          }
        }}
        onClick={() => {
          replaceCurrentPlaylist(props.playlist);
          setButtonState("playing");
        }}
      >
        {buttonState === "listen" ? (
          <React.Fragment>
            LISTEN
            <PlayCircleOutline />
          </React.Fragment>
        ) : buttonState === "playing" ? (
          <React.Fragment>
            PLAYING
            <BarChart />
          </React.Fragment>
        ) : buttonState === "play" ? (
          <React.Fragment>
            PLAY ALL
            <PlayCircleOutline />
          </React.Fragment>
        ) : buttonState === "replay" ? (
          <React.Fragment>
            REPLAY
            <Replay />
          </React.Fragment>
        ) : null}
      </Button>
    </React.Fragment>
  );
};

export default StyledButton;
