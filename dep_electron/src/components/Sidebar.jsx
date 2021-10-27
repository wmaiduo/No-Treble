import React from 'react'

function Sidebar() {
  return (
  
       <div className="sidebar">
        <h2 className="heading">No Treble </h2>
        <a className="active" href="#home"> <span className="fa fa-home" aria-hidden="true"></span>Home</a>
        <a href="#"><i className="fa fa-heart"></i>Favourites</a>
        <a href="#"><i className="fa fa-user"></i>Artists</a>
        <a href="#"><i className="fa fa-camera"></i>Album </a>          
      </div>
  
  )
}

export default Sidebar
