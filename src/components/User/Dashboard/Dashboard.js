import React from 'react';
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchUserPaths } from '../../../actions/userPaths';
import DashboardNav from './DashboardNav';
//import Explore from '../Explore/Explore';
//import PathOverview from '../PathOverview/pathOverview';


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserPaths());
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="dashboard">
        <Route path='/dashboard' component={DashboardNav} />
        {/* <Route exact path='/dashboard/explore' component={Explore} /> */}
        {/* <Route exact path='/dashboard/saved' component={SavedPaths} /> */}
        {/* <Route exact path='/dashboard/path-overview' component={PathOverview} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});


export default requiresLogin()(connect(mapStateToProps)(Dashboard));
