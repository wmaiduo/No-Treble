import React from 'react';
import './Application.css'
import Sidebar from './Sidebar.jsx';
import Searchbar from './Searchbar.jsx';
import Cards from './Cards.jsx';
import Controller from './Controller.jsx';



export default function Application() {
  return (
    <div className = "layout">
   <Sidebar/>
   <div className="container">
   <Searchbar/>
   <Cards/>
   <Controller/>
   </div>
   
  

   </div>
  )
}
