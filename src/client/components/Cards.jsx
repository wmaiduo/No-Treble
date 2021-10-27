import React from 'react';
import DeletIcon from '../public/images/delete_outline-24px.svg';
import Screenshot from '../public/images/Screenshot.png';




function Cards() {
  return (
    <div className="cards">
      <div className="cardlist">
        <div className="listcontainer">
        <div className="listcontent">1 </div>
        <div className="listcontent"><img  className= "listimg" src={Screenshot}/></div>
        </div>
        <div className="listcontent">title</div>
        <div className="listcontent">duration</div>
        <div className="listcontent"><img src={DeletIcon}/></div>
      </div>
      <div className="cardlist">
        <div className="listcontainer">
        <div className="listcontent">1 </div>
        <div className="listcontent"><img  className= "listimg" src={Screenshot}/></div>
        </div>
        <div className="listcontent">title</div>
        <div className="listcontent">duration</div>
        <div className="listcontent"><img src={DeletIcon}/></div>
      </div>
      <div className="cardlist">
        <div className="listcontainer">
        <div className="listcontent">1 </div>
        <div className="listcontent"><img  className= "listimg" src={Screenshot}/></div>
        </div>
        <div className="listcontent">title</div>
        <div className="listcontent">duration</div>
        <div className="listcontent"><img src={DeletIcon}/></div>
      </div>
      <div className="cardlist">
        <div className="listcontainer">
        <div className="listcontent">1 </div>
        <div className="listcontent"><img  className= "listimg" src={Screenshot}/></div>
        </div>
        <div className="listcontent">title</div>
        <div className="listcontent">duration</div>
        <div className="listcontent"><img src={DeletIcon}/></div>
      </div>
      <div className="cardlist">
        <div className="listcontainer">
        <div className="listcontent">1 </div>
        <div className="listcontent"><img  className= "listimg" src={Screenshot}/></div>
        </div>
        <div className="listcontent">title</div>
        <div className="listcontent">duration</div>
        <div className="listcontent"><img src={DeletIcon}/></div>
      </div>
      <div className="cardlist">
        <div className="listcontainer">
        <div className="listcontent">1 </div>
        <div className="listcontent"><img  className= "listimg" src={Screenshot}/></div>
        </div>
        <div className="listcontent">title</div>
        <div className="listcontent">duration</div>
        <div className="listcontent"><img src={DeletIcon}/></div>
      </div>
    </div>
  );
}

export default Cards;
