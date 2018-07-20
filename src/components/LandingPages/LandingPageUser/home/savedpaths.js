import React from 'react';
import { connect } from 'react-redux';
import { setDisplay } from '../../../../actions/paths';

export function SavedPaths(props) {
  let savedPaths;
  if (props.saved.length > 0) {
      savedPaths = props.saved.map((path, index) => {
        return (
          <li key={index}>
            <p>{path.title}</p>
            <img src={path.hero} alt='' onClick={() => {
            props.dispatch(setDisplay(path.path))}
            }/>
          </li>
        )
      })
  } else {
     savedPaths = <li><p>You dont have any saved paths yet, go to explore to add some</p></li>
  }

  return (
    <ul>
      {savedPaths}
    </ul>
  )
}

const mapStateToProps = state => ({
  saved: state.auth.currentUser.savedPaths
})

export default connect(mapStateToProps)(SavedPaths)