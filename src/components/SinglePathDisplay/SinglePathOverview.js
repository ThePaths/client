import React from 'react';
import './singlePathOverview.css';



export default function SinglePathOverview (props) {
  return (
    <div className="singleItemOverView">
    <img src={`http://img.youtube.com/vi/${props.id}/1.jpg`} alt='FIX' />
    <p>{props.id}</p>
    <p>{props.length}</p>
    <p>{props.replit}</p>
    
    <button onClick={()=>props.onclick()}>CLICK ME</button>
    </div>
  );
}