import React from 'react';
import './multiplePathDisplay.css';
//let videos = require('../Scratch/scratchVideoObjects');

export default function MultiplePathDisplay (props) {
  return (
    <div >
     {/* <h1>Hello World</h1> */}
     
    {console.log(props)} 
        <img src={`http://img.youtube.com/vi/${props.paths.videos[0].id}/0.jpg`} 
          alt='FIX' 
          className="multiplePathDisplay"
          onClick={() => console.log('Fix MultiplePathDisplay')}/>;
      
    

    </div>
  );
}