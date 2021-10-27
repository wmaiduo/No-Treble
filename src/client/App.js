import React, { Component } from 'react';
import './app.css';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Cards from './components/Cards';
import Controller from './components/Controller';
import 'font-awesome/css/font-awesome.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <Sidebar />
        <div className="container">
          <Searchbar/>
          <Cards/>
          <Controller/>
        </div>
      </div>
    );
  }
}
