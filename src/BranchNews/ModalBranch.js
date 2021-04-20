import React, { Component } from "react";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
import "./ModalBranch.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default class ModalBranchNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNews: this.props.data,
      open: this.props.open,
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
                <p className="col-12 p-0 Branch_modalTitle">
                  {this.state.selectedNews.title}
                </p>
                <p className="col-12 p-0 Branch_modalDate">
                  {this.state.selectedNews.date}
                </p>
                <p className="col-12 p-0 Branch_modalAuthor">
                  {this.state.selectedNews.author}
                </p>
              </div>
              <div className="row">
                <div className="News_images">
                  {this.state.selectedNews.image.map((image, index) => (
                    <img
                      src={image}
                      alt=""
                      className="Branch_modalImage"
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-0 Branch_modalDescription">
                  {this.state.selectedNews.description}
                </div>
              </div>
              <div className="row">
                <p className="Branch_modalDetails">Details:</p>
                <div className="col-12 p-0">
                  <a href="/">{this.state.selectedNews.details}</a>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      );
    } else {
      this.props.closeModal();
      return null;
    }
  }
}
