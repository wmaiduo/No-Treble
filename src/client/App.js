<<<<<<< HEAD
import React, { Component, useEffect, useContext } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage"

import MusicPlayerContextUsageExample from "./MusicPlayerContextUsageExample";

export default function App() {
  return (
      <div className="layout">
        <Sidebar />
        <div className="container">
          <Search />
          <Cards />
          <Controller />
          <SearchPage />
        </div>
        <MusicPlayer />
=======
import React, { Component } from 'react';
import './app.css';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Cards from './components/Cards';
import Controller from './components/Controller';
import songsdata from '../data/dummydata.json'

export default class App extends Component {
   state= {
    songs: songsdata,
  };
  render() {
    return (
      <div className="layout">
        <Sidebar />
        <div className="container">
          <Searchbar/>         
          <Cards data = {this.state.songs}/>
          <Controller/>
        </div>
>>>>>>> origin/anshu/react
      </div>

      // uncomment the line below and comment things above until return to see how MusicPlayerContextUsageExample work
      // <MusicPlayerContextUsageExample />
  );
}
