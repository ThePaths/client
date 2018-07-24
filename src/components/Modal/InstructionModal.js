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
      this.setState.onCloseModal
    }
    const { open } = this.state;
    return (
      <div>
      <button onClick={this.onOpenModal}>?</button>
      <Modal open={open} onClose={ this.onCloseModal } center>
        <p>Simple centered modal</p>
      </Modal>
    </div>
    )
  }

}

const mapStateToProps = state => ({
   loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(InstructionModal);