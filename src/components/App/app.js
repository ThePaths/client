import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Switch} from 'react-router-dom';

import LandingPage from '../LandingPages/LandingPageGuest/landing-page';
import Dashboard from '../LandingPages/LandingPageUser/dashboard';
// import {refreshAuthToken} from '../../actions/auth';

//import Scratch from '../Scratch/scratch';
import MainHeader from '../Headers/MainHeader/MainHeader';
import AuthPage from '../AccountForms/auth-page';
import ClassroomHeader from '../Headers/ClassroomHeader/ClassroomHeader';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import Footer from '../Footer/Footer';
import MultiplePathDisplay from '../MultiplePathDisplay/MultiplePathDisplay';
import GuestClassroom from '../Guest/GuestClassroom';

export class App extends React.Component {

  render() {

    // let header;
    
    // if (this.props.loggedIn) {
    //   header = <Route path="/" component={ClassroomHeader}/>;
    // } else {
    //   header = <Route path="/" component={MainHeader}/>;
    // }

    return (
      <div className="app">
        <Switch>
          <Route exact path="/classroom" component={ClassroomHeader} />
          <Route path="/" component={MainHeader} />
        </Switch>

        <main className="main-content">
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/classroom" component={CurrentVideo} />
          <Route exact path="/classroom/:id" component={ GuestClassroom } />
          <Route exact path="/MultiplePathDisplay" component={MultiplePathDisplay} />
        </main>
        
        <Route path ="/" component={Footer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
