import React, { Component } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar.jsx";
import Searchbar from "./components/Searchbar.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import MusicPlayer from "./components/MusicPlayer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MusicPlayer />
      </React.Fragment>
    );
  }
}
