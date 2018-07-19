import React from 'react';
const videos = require('../Scratch/scratchVideoObjects');

export default function Repl (){
  return (
    <iframe className="??????????"
      title="firstAttempt"
      height="400px" 
      width="100%" 
      //=======================Connect this line with state==================================
      src={videos[0].replit} 
      scrolling="no" 
      frameBorder="no"
      allowtransparency="true" 
      allowFullScreen="true" 
      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
    </iframe>
  );
}