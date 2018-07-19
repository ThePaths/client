import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import LandingPage from '../LandingPages/LandingPageGuest/landing-page';
import Dashboard from '../LandingPages/LandingPageUser/dashboard';
import {refreshAuthToken} from '../../actions/auth';

import Scratch from '../Scratch/scratch';
import GuestHeader from '../Headers/GuestHeader/GuestHeader';
import AuthPage from '../AccountForms/auth-page';
import UserHeader from '../Headers/UserHeader/UserHeader';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import Footer from '../Footer/Footer';
import MultiplePathDisplay from '../MultiplePathDisplay/MultiplePathDisplay';


export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {

    let header;
    
    if (this.props.loggedIn) {
      header = <Route path="/" component={UserHeader}/>;
    } else {
      header = <Route path="/" component={GuestHeader}/>;
    }

    return (
      <div className="app">
        {header}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/classroom" component={CurrentVideo} />
        
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
