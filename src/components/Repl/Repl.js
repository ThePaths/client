import React from 'react';
import './Repl.css';

export default function Repl(props) {
 
  return (
    <div>
    <iframe 
      title="firstAttempt"
      height="400px"
      width="100%"
      src={ props.repl }
      scrolling="no"
      role="presentation"
      frameBorder="no"
      allowtransparency="true"
      allowFullScreen="true"
      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
    </iframe> 
    
   </div>
  );
  
}

