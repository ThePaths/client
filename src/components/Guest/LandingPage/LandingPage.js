import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "console.image";
import "./landingPage.css";
import { fetchGuestPaths } from "../../../actions/GUEST/guestPaths";

export class LandingPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGuestPaths());
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
   
    const paths = this.props.paths.map((path, index) => {
      return (
        <li
          key={index}
          onClick={() => (window.location.href = `/classroom/${path.id}`)}
          className="landingPageBoxes"
        >
          <img
            src={`https://res.cloudinary.com/thepaths/image/upload/v1533069112/thumbnails/${
              path.id
            }.png`}
            alt={`${path.title}`}
            className="heroImage"
          />
          <h2 className="sample-path-title">{path.title}</h2>
          <p className="sample-path-description">{path.description}</p>
        </li>
      );
    });

    return (
      <div className="home">
        <div className="guest-container">
          <h2>Welcome to Melata</h2>
          <p className="site-introduction">
            Melata is a one stop shop for the coding newbie. It has
            instructional videos along with an essential IDE to code along with
            on the same screen. Users can pick through an assortment of
            languages and frameworks to learn the latest 'best-practices' in the
            industry. Sample code is provided with each video to be able to
            follow along with the developer inspired instructional videos.
          </p>
        </div>
        <ul className="gp-container">{paths}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  paths: state.guests.paths || null,
  loading: state.guests.loading
});

export default connect(mapStateToProps)(LandingPage);
