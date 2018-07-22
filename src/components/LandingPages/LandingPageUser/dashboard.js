import React from 'react';
import {Route} from 'react-router-dom';
import { Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { getLesson, fetchPaths } from '../../../actions/paths';
//import Home from './home/home'
import Explore from './explore';
//import PathOverview from '../../PathOverview/pathOverview';
import Spinner from 'react-spinkit';
export class Dashboard extends React.Component {

  buttonClick(){
    console.log('working') 
    this.props.dispatch(fetchPaths('5b4f9ee2de939e0e5c4d0b71',this.props.authToken));
    console.log('still working');
    this.props.dispatch(getLesson('5b4f9ee2de939e0e5c4d0b71',this.props.authToken));
   }
  componentWillUnmount(){
    console.log('Unmounting') 
    this.props.dispatch(fetchPaths('5b4f9ee2de939e0e5c4d0b71',this.props.authToken));
    console.log('still Unmounting');
    this.props.dispatch(getLesson('5b4f9ee2de939e0e5c4d0b71',this.props.authToken));
  }
  componentDidmount(){
    console.log('mounting') 
    this.props.dispatch(fetchPaths('5b4f9ee2de939e0e5c4d0b71',this.props.authToken));
    console.log('still mounting');
    this.props.dispatch(getLesson('5b4f9ee2de939e0e5c4d0b71',this.props.authToken));
  }


  render() {
    console.log("user",this.props.user);
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    if (this.props.user) {
      console.log("loading",this.props.user.loading)
      return <Spinner spinnername="circle" fadeIn='none' />;
      };
    return (
      <div className="dashboard">
        {/* <Route path='/dashboard' component={Home} /> */}
        
        <Explore/>
        
        
        {/* <Route exact path='/dashboard' component={Explore} /> */}
        <Link to="/classroom" >
              <button onClick={()=>this.buttonClick()}>Classroom</button>
            </Link>
        {/* <Route exact path='/dashboard/path-overview' component={PathOverview} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser ,
  user: state.auth.loading,
  lesson: state.paths.lesson,
  authToken: state.auth.authToken
});


export default connect(mapStateToProps)(Dashboard);
