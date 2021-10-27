import React from 'react';
import avatar from '../../public/images/Screenshot.png';

function Cards() {
  return (
    <div className="cards">
      <div className="cardlist">
        <div className="cardlist-content">1</div>
        <div className="cardlist-content">{avatar}</div>
        <div className="cardlist-content">title</div>
        <div className="cardlist-content">duration</div>
      </div>
      <div className="cardlist"></div>
      <div className="cardlist"></div>
      <div className="cardlist"></div>
      <div className="cardlist"></div>
      <div className="cardlist"></div>
    </div>
  );
}

export default Cards;
