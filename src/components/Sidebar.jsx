import React from 'react'

function Sidebar() {
  return (
  
       <div class="sidebar">
        <h2 class="heading">No Treble </h2>
        <a class="active" href="#home"> <span class="fa fa-home" aria-hidden="true"></span>Home</a>
        <a href="#"><i class="fa fa-heart"></i>Favourites</a>
        <a href="#"><i class="fa fa-user"></i>Artists</a>
        <a href="#"><i class="fa fa-camera"></i>Album </a>          
      </div>
  
  )
}

export default Sidebar
