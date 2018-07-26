import React from 'react';
import { connect } from 'react-redux';

import CompletedPaths from '../CompletedPaths/CompletedPaths';
import CurrentPaths from '../CurrentPaths/CurrentPaths';
import SavedPaths from '../SavedPaths/SavedPaths';
import { fetchCurrentPaths, fetchSavedPaths } from '../../../actions/userPaths';

export class UserPaths extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCurrentPaths());
    this.props.dispatch(fetchSavedPaths());
  }

  render() {
    return (
      <div>
        <CurrentPaths />
        <SavedPaths />
        <CompletedPaths />
      </div>
    )
  }
}

export default connect()(UserPaths);