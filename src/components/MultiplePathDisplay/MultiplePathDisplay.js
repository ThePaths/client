import React from 'react';
import './multiplePathDisplay.css';
let videos = require('../Scratch/scratchVideoObjects');

export default function MultiplePathDisplay () {
  return (
    <div >
      <h3>Choose a Path</h3>
      {videos.map((video,index) => {
        return <img src={`http://img.youtube.com/vi/${video.id}/0.jpg`} 
          alt='FIX' 
          key={index}
          className="multiplePathDisplay"
          onClick={() => console.log('Fix MultiplePathDisplay')}/>;
      })};
    

    </div>
  );
}