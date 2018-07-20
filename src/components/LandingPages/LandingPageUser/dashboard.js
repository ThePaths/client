import React from 'react';
import {Route} from 'react-router-dom';
import requiresLogin from '../requires-login';

import Home from './home/home'
import Explore from './explore';

export default class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <Route exact path='/dashboard' component={Home} />
        <Route exact path='/dashboard/explore' component={Explore} />
      </div>
    );
  }
}

