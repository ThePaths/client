import React from "react";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import "./instructionModal.css";
export class InstructionModal extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      this.onOpenModal();
    }
  }

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="modal" onClick={this.onOpenModal}>
          ?
        </button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            modal: "info-modal",
            closeButton: "info-btn"
          }}
        >
          <p>This is the classroom page of Melata!</p>
          <p>
            Here you have access to the first video of the path and a repl.it
            for that video. The repl.it allows you to code along with and try
            the things you learned in the video.
          </p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(InstructionModal);
