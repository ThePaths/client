import React from 'react';




export default function SinglePathOverview (props) {
  return (
    <div>
    <p>{props.id}</p>
    <p>{props.length}</p>
    <p>{props.replit}</p>
    <img src={`http://img.youtube.com/vi/${props.id}/0.jpg`} alt='FIX' />
    </div>
  );
}