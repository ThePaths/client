import React from 'react';
import {Route} from 'react-router-dom';
import CurrentPath from './currentpath';
import CompletedPaths from './completedpaths';
import SavedPaths from './savedpaths';

export default function Home(props) {
  return (
    <div>
      <Route exact path='/dashboard/current' component={CurrentPath} />
      <Route exact path='/dashboard/completed' component={CompletedPaths} />
      <Route exact path='/dashboard/saved' component={SavedPaths} />
    </div>
  )
}