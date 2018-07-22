import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

//import LandingPage from '../LandingPages/LandingPageGuest/landing-page';
//import Dashboard from '../LandingPages/LandingPageUser/dashboard';
//import {refreshAuthToken} from '../../actions/auth';

//import Scratch from '../Scratch/scratch';
import GuestHeader from '../Headers/GuestHeader/GuestHeader';
import AuthPage from '../AccountForms/auth-page';
import UserHeader from '../Headers/UserHeader/UserHeader';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import Explore from '../LandingPages/LandingPageUser/explore'
import Footer from '../Footer/Footer';
//import MultiplePathDisplay from '../MultiplePathDisplay/MultiplePathDisplay';


export class App extends React.Component {

  render() {
    
    return (
      <div className="app">
        <header role='banner'> 
          {(this.props.loggedIn) ? <UserHeader/> : <GuestHeader/>}
        </header>
        <main className="main-content">
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/dashboard" component={Explore} />
          <Route exact path="/classroom" component={CurrentVideo} />
        </main>
          <Route path ="/" component={Footer} />
      
          {/* <Route exact path="/" component={LandingPage} />
          // <Route exact path="/dashboard" component={Dashboard} />*/         
          /*
           */}
          {/* <Route exact path="/MultiplePathDisplay" component={MultiplePathDisplay} /> */}
        
        
          </div>   
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
