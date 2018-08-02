import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../../../actions/auth';
import {clearUserPathState} from '../../../actions/DELETE/deleteActions';
import {clearAuthToken} from '../../../local-storage';
import InstructionModal from '../../Modal/InstructionModal';
import './ClassroomHeader.css';
export class ClassroomHeader extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(clearUserPathState());
    clearAuthToken();
  }

  render() {
    let headerBtn;
    let siteNav;
    if (this.props.loggedIn) {
      headerBtn = <Link className="form-redirect-link" 
        onClick={ () => this.logOut() } to='/'>Sign Out</Link>;
      siteNav = <div className="navLinks">
        <nav className="site-nav">
          <ul>
            <li>
              <Link className="nav-link" to='/dashboard/explore'>Explore|</Link>
            </li>
            <li>
              <Link className="nav-link" to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>;
    } else {
      headerBtn = <Link className="form-redirect-link" to='/auth'>Login</Link>;
      siteNav = '';
    }

    return (
      <header className="main-header classroom-header">
        <div>
          <Link to='/'>
            <h1 className='site-logo'>Melata</h1>
          </Link>
        </div>
        {siteNav}
        <div className="modalContainer">
          <InstructionModal/>
        </div>
        <div className='form-redirect-container'>
          {headerBtn}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(ClassroomHeader);
