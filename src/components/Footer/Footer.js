import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <p>
          &copy; 2018 Created by <a className="site-creator-link" 
            href="https://github.com/jimmlusk" 
            target="_blank" 
            rel="noopener noreferrer">Jimm</a>, 
          <a className="site-creator-link" 
            href="https://github.com/Dameon1" 
            target="_blank" 
            rel="noopener noreferrer"> Dameon</a>, 
          <a className="site-creator-link" 
            href="https://github.com/arsalonk" 
            target="_blank" 
            rel="noopener noreferrer"> Sayed</a>, &amp;
          <a className="site-creator-link" 
            href="https://terrancecorley.com" 
            target="_blank" 
            rel="noopener noreferrer"> Terrance</a>.
        </p>
      </footer>
    );
  }
}