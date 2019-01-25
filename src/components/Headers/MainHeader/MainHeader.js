import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./MainHeader.css";
import { clearAuth } from "../../../actions/auth";
import { clearUserPathState } from "../../../actions/DELETE/deleteActions";
import { clearAuthToken } from "../../../local-storage";

export class MainHeader extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(clearUserPathState());
    clearAuthToken();
  }

  render() {
    let url = window.location.href;
    let linkText = "";
    let linkTo = "";
    let navClassList = "site-nav";
    const mainHeaderUrls = [
      "http://localhost:3000/",
      "https://the-paths-client.herokuapp.com/",
      "http://localhost:3000/auth",
      "https://the-paths-client.herokuapp.com/auth",
      "https://the-paths.firebaseapp.com/",
      "https://the-paths.firebaseapp.com/auth"
    ];

    navClassList = "site-nav";

    for (let i = 0; i <= mainHeaderUrls.length; i++) {
      if (url === mainHeaderUrls[i]) {
        linkText = "Login";
        navClassList += " hide";
      }
    }

    if (this.props.loggedIn) {
      linkText = "Sign Out";
      linkTo = "/";
    } else {
      linkText = "Login";
      linkTo = "/auth";
    }

    return (
      <header className="main-header">
        <div className="site-logo-container">
          <Link className="site-logo-wrapper" to="/">
            <h1 className="site-logo">Melata</h1>
            <div className="site-icon" />
          </Link>
        </div>
        <div>
          <nav className={navClassList}>
            <ul>
              <li>
                <Link className="nav-link" to="/dashboard/explore">
                  Explore
                </Link>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="form-redirect-container">
          <Link
            className="form-redirect-link"
            onClick={() => this.logOut()}
            to={linkTo}
          >
            {linkText}
          </Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainHeader);
