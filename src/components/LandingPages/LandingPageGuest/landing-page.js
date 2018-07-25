import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import 'console.image';
import './landing-page.css';
import { fetchGuestPaths } from '../../../actions/guestPaths'

export class LandingPage extends React.Component {

  handleImageClicked(classroomInfo) {
    console.log('working');
  }

  // If we are logged in redirect straight to the user's dashboard

  componentDidMount() {
    this.props.dispatch(fetchGuestPaths())
  }
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    const jimm =
      'https://media.licdn.com/dms/image/C4D03AQE5aRtIPHO6HQ/profile-displayphoto-shrink_800_800/0?e=1537401600&v=beta&t=kUHFHcnLAoWfegX1JYRQG9ZQP4RK3tYZU3htMo1yPqc';
    const sayed =
      'https://media.licdn.com/dms/image/C4D03AQHn-tjeDHXPVg/profile-displayphoto-shrink_800_800/0?e=1537401600&v=beta&t=i4O7yXaUUx1TY0GtcOSR-_nwW5gNfIhQ_xCYZV3CXJE';
    const dameon =
      'https://media.licdn.com/dms/image/C5603AQE56jBytxJMPA/profile-displayphoto-shrink_800_800/0?e=1537401600&v=beta&t=kTtfTglP1E9jjdpk5mXLGla8dY1wmuKJEtnCN5KQrnY';
    const terrance =
      'https://avatars2.githubusercontent.com/u/20272233?s=460&v=4';
    console.log('The Four Creators of The Paths');
    console.image(jimm);
    console.image(sayed);
    console.image(dameon);
    console.image(terrance);
    const paths = this.props.paths.map((path, index) => {
      return (
        <li key={index} onClick={() => window.location.href = `/classroom/${path.id}`}>
          <img src={path.hero}
            alt="FIX"
            onClick={() => console.log(path.id)} />
          <h2>{path.title}</h2>
          <p>{path.description}</p>
        </li>
      )
    })

    return (
      <div className="home">
        <div className='guest-container'>
          <h2>Welcome to DevOps2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nostrum assumenda et aperiam, ex magnam, perspiciatis delectus fugit exercitationem aliquid quia in maxime pariatur! Omnis at rem, optio reiciendis suscipit vitae aut soluta vel praesentium ullam dolores nam voluptas, quisquam quas? Porro magni temporibus iure aspernatur? Vel explicabo obcaecati quidem?</p>
          <p>Check out some of our Paths below</p>
        </div>
        <ul className='gp-container'>{paths}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  paths: state.guests.paths || null
});

export default connect(mapStateToProps)(LandingPage);
