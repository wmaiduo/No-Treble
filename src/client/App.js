import React, { Component } from 'react';
import './app.css';
import Sidebar from './components/Sidebar.jsx';
import Searchbar from './components/Searchbar.jsx';
import Cards from './components/Cards.jsx';
import Controller from './components/Controller.jsx';

export default class App extends Component {
  render() {
    return (
      <div className = "layout">
      <Sidebar/>
      <div className="container">
      <Searchbar/>
      <Cards/>
      <Controller/>
      </div>
      </div>
    );
  }
}
