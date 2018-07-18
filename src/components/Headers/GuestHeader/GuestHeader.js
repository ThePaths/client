import React from 'react';
import {connect} from 'react-redux';

export class GuestHeader extends React.Component {

  render() {
    return (
      <header>
        <div>
          <h1>The Paths</h1>
        </div>
        <div>
          <button>Login/Register</button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GuestHeader);
