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
      </div>
    );
  }
}
