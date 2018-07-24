import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import LandingPage from '../Guest/LandingPage/LandingPage';
//import LandingPage from '../LandingPages/LandingPageGuest/landing-page';
import Dashboard from '../LandingPages/LandingPageUser/dashboard';
// import {refreshAuthToken} from '../../actions/auth';

//import Scratch from '../Scratch/scratch';
import GuestHeader from '../Headers/GuestHeader/GuestHeader';
import AuthPage from '../AccountForms/auth-page';
import UserHeader from '../Headers/UserHeader/UserHeader';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import Footer from '../Footer/Footer';
import MultiplePathDisplay from '../MultiplePathDisplay/MultiplePathDisplay';
//import GuestClassroom from '../Guest/GuestClassroom';
import Classroom from '../Guest/Classroom/Classroom';

export class App extends React.Component {

  render() {

    return (
      <div className="app">
        
      {(this.props.loggedIn) ? <UserHeader/> : <GuestHeader/>}
        <main className="main-content">
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/classroom" component={CurrentVideo} />
          <Route exact path="/classroom/:id" component={ Classroom } />
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
