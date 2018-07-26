import React from 'react';
import { connect } from 'react-redux';
import { fetchGuestClassroom } from '../../../actions/guestPaths';
import './classroom.css';
import Repl from '../../Repl/Repl';
import InstructionModal from '../../Modal/InstructionModal';
import YoutubePlayer from '../../Youtube/YoutubePlayer';


export class GuestClassroom extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    this.props.dispatch(fetchGuestClassroom(id))
  }

  render() {
    if (!this.props.loading) {
      return (
        <section className="classroom-section">
          <InstructionModal />
          <YoutubePlayer props={ this.props }/>
          <Repl repl={ this.props.display.videos[0].replit }/>
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  display: state.guests.classroom,
  loading: state.guests.loading,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GuestClassroom);