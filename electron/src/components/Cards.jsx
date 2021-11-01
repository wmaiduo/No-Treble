import React, { useState, useEffect } from "react";
import DeletIcon from '../public/images/delete_outline-24px.svg';
import Screenshot from '../public/images/Screenshot.png';

function Cards(props) {
  const [favorite, setFavorite] = useState([]);
  const addToFavorite = id => {
    if (!favorite.includes(id)) setFavorite(fav=> [...fav,id]);      
  };

  // const removeFavorite = id => {
  //   let index = favorite.indexOf(id);
  //   console.log(index);
  //   let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
  //   setFavorite(temp);
  // };
  
  const songlist = props.data.map((song)=>(
    <div className="cardlist"key={song.id}>
      <div className="listcontainer">
        <div className="listcontent">{song.id} </div>
        <div className="listcontent"><img className= "listimg" src={Screenshot}/></div>
      </div>
      <div className="listcontent">{song.title}</div>
      <div className="listcontent">{song.duration}</div>
      <div className="listcontent"><span className="far fa-heart" onClick ={() => addToFavorite(song.id)}></span></div>
      <div className="listcontent"><img src={DeletIcon}/></div>
    </div>     
)
  ) 

  return (  
    <div className="cards">
      {songlist}
   </div>  
  );
}

export default Cards;
