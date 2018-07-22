import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
//import { fetchPaths, addToSaved, setDisplay, getLesson, addToCurrent }
import { fetchPaths, getLesson }  from '../../../actions/paths';
import './explore.css';
class Explore extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchPaths(this.props.authToken))
  }

  handleImageClicked(id){
    this.props.dispatch(getLesson(id,this.props.authToken))
  }
  render() {
    return (
     <div>
        {this.props.paths.map((path, index) => {
          return (
            <Link to='/classroom' 
                  key={index}  
                  onClick={() => this.handleImageClicked(path.id)}
                  >
                  <div className='exploreBoxes'>           
                  <p>{path.title}</p>
              <img src={path.hero} alt='' className='heroImage'/>
              </div> 
            </Link>
          )
        })}      
     </div> 
    )
  }
}

const mapStateToProps = state => ({
  paths: state.paths.paths,
  current: state.auth.currentUser,
  authToken: state.auth.authToken
})

export default connect(mapStateToProps)(Explore)