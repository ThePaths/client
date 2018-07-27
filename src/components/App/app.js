import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import MainHeader from '../Headers/MainHeader/MainHeader';
import ClassroomHeader from '../Headers/ClassroomHeader/ClassroomHeader';
import LandingPage from '../Guest/LandingPage/LandingPage';
import GuestClassroom from '../Guest/Classroom/GuestClassroom';
import AuthPage from '../AccountForms/auth-page';
import Classroom from '../User/Classroom/Classroom';
import Dashboard from '../User/Dashboard/Dashboard';
import Footer from '../Footer/Footer';

export class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/classroom" component={ ClassroomHeader }/>
          <Route path="/" component={ MainHeader }/>
        </Switch>
        <main className="main-content">
          <Route exact path="/" component={ LandingPage }/>
          <Route path="/dashboard" component={ Dashboard }/>
          <Route exact path="/auth" component={ AuthPage }/>
          <Route exact path="/dashboard/classroom/:id/:videoIndex" component={ Classroom }/>
          <Route exact path="/classroom/:id" component={ GuestClassroom }/>
        </main>
        <Route path ="/" component={ Footer }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));