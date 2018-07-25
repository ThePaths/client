import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
//import CurrentPath from './currentpath';
//import CompletedPaths from './completedpaths';
import SavedPaths from './savedpaths';
//import { fetchUserPaths } from '../../../../actions/userPaths';

export class Home extends React.Component {
  
  render() {
    return (
      <div>
        {/* <Route exact path='/dashboard' component={CurrentPath} /> */}
        <Route exact path='/dashboard/saved' component={SavedPaths} />
        {/* <Route exact path='/dashboard/completed' component={CompletedPaths} /> */}
      </div>
    );
  }
}

export default connect()(Home);