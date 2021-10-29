//this component is used in ./FavoritesPage.jsx
//props.title is a String for the song, props.artist is a String for the name of the singer
//props.cover is the URL link in String for the image of the album, props.preview is the URL link in string for the mp3 file of the song
import React from "react";

const FavoritesPageCard = (props) => {
  return (
    <li>
      <img src={props.cover} /> {props.title} - {props.artist}
    </li>
  );
};

export default FavoritesPageCard;
