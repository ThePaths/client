import React from 'react';
import { connect } from 'react-redux';
import { setDisplay } from '../../../../actions/paths';
import { fetchUserPaths, setUserDisplay } from '../../../../actions/userPaths';

export class SavedPaths extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserPaths());
  }

  render() {
    if (!this.props.loading) {
      let savedPaths;
      if (this.props.saved) {
        savedPaths = this.props.saved.map((path, index) => {
          return (
            <li key={index}>
              <p>{path.title}</p>
              <img src={path.hero} alt='' onClick={() => {
                this.props.dispatch(setUserDisplay(path._id));
                window.location.href = '/dashboard/path-overview';
              }
              } />
            </li>
          );
        });
      } else {
        savedPaths = <li><p>no saved paths yet</p></li>;
      }
      return (
        <ul>
          {savedPaths}
        </ul>
      );
    }
    return (
      null
    );
  }
}

const mapStateToProps = state => ({
  saved: state.userPaths.userPaths.savedPaths,
  loading: state.userPaths.loading
});

export default connect(mapStateToProps)(SavedPaths);