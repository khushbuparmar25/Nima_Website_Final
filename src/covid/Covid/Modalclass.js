import React, { Component } from "react";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
import "./Modalclass.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default class Modalclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorDetails: this.props.data,
      open: this.props.open,
      closeModal: this.props.closeModal,
    };
    console.log(this.state);
  }

  componentDidMount() {
    // this.myRef.current.scrollTo(0, 0);
    // this.myRef.current.scrollIntoView();
    // window.scrollTo(0, 0);
    // let ele = document.getElementById("modal");
    // ele.scrollTo(0, 0);
  }
  onCloseModal = () => {
    this.setState({
      open: false,
    });
  };

  componentWillUnmount() {}
  render() {
    if (this.state.open) {
      return (
        <div id="modal">
          <Modal isOpen={this.state.open} toggle={this.onCloseModal}>
            <ModalHeader
              toggle={this.onCloseModal}
              style={{ border: "0" }}
            ></ModalHeader>
            <div className="m-3">
              <div className="row">
                <p className="col-12 p-0 CovidModal_modalTitle">
                  Doctor Name : {this.state.doctorDetails.names}
                </p>
                <p className="col-12 p-0 CovidModal_modalDate">
                  Mob No. : {this.state.doctorDetails.mobileNumber}
                </p>
                <p className="col-12 p-0 CovidModal_modalAuthor">
                  <b>{this.state.doctorDetails.location}</b>
                </p>
              </div>
              <div className="row">
                <div className="CovidModal_images">
                  {this.state.doctorDetails.images.map((image, index) => (
                    <img
                      src={image}
                      alt=""
                      className="CovidModal_modalImage"
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-0 CovidModal_modalDescription">
                  {this.state.doctorDetails.description}
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-0">
                  <p className="CovidModal_modalDetails">Details:</p>
                  <a href="/" className="CovidModal_Link">
                    {this.state.doctorDetails.detail}
                  </a>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      );
    } else {
      // console.log(this.state.closeModal());
      this.props.closeModal();
      return null;
    }
  }
}
