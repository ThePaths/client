import React from 'react';

export default function Repl (){
  return (
    <iframe className="??????????"
      title="firstAttempt"
      height="400px" 
      width="100%" 
//=======================Connect this line with state==================================
      src={videos[this.state.currentVideoIndex].replit} 
      scrolling="no" 
      frameBorder="no"
      allowtransparency="true" 
      allowFullScreen="true" 
      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
    </iframe>
  )
}