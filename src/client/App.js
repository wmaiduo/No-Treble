import React, { Component } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Cards from "./components/Cards";
import Controller from "./components/Controller";
import songsdata from "../data/dummydata.json";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage"

export default class App extends Component {
  state = {
    songs: songsdata,
  };
  render() {
    return (
      <div className="layout">
        <Sidebar />
        <div className="container">
          <Search />
          {/* <Cards data={this.state.songs} /> */}
        
          <SearchPage />
        </div>

        <MusicPlayer />
      </div>
      // uncomment the line below and comment things above until return to see how MusicPlayerContextUsageExample work
      // <MusicPlayerContextUsageExample />
    );
  }
}
