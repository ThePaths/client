import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';

export class InstructionModal extends React.Component {
  state = {
    open:true,
  }

  onOpenModal = () => { 
    this.setState({ open: true }); 
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    if(this.props.loggedIn){
      this.setState({ open: false });
    }
    const { open } = this.state;
    return (
      <div>
      <button onClick={ this.onOpenModal }>?</button>
      <Modal open={ open } 
             onClose={ this.onCloseModal } 
             center>
        <p>This is the classroom page of The Paths!</p>
        <p>
          Here you have access to the first video of the path and a repl.it for that video.
          The repl.it allows you to code along with and try the things you learned in the video.
        </p>
      </Modal>
    </div>
    )
  }
}

const mapStateToProps = state => ({
   loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(InstructionModal);