import React from 'react';
import './Application.css'
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import Cards from './Cards.jsx';
import Controller from './Controller';



export default function Application() {
  return (
    <div className="layout">
   <Sidebar/>
   <div className='container'>
   <Searchbar/>
   <Cards/>
   <Controller/>
   </div>
   </div>
  );
}