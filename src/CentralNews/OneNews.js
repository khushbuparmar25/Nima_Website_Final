import React, { Component } from "react";
import "./OneNews.css";
import { dateHelper } from "./NewsHelper";
import ModalNews from "./ModalNews";
const bg = {
  overlay: {
    background: "#FFFF00",
  },
};

export default class OneNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.data,
      date: this.props.date,
      open: false,
      modal: "-1",
    };
  }

  showModal = (e) => {
    // e.preventDefault();
    console.log(e);
    // console.log(e.target.id);
    let index = e;
    this.setState({
      modal: index,
    });
    // setTimeout(() => {
    //   console.log("state", this.state.modal);
    // }, 2000);
  };
  closeModal = () => {
    this.setState({
      modal: "-1",
    });
  };
  render() {
    const date = dateHelper(this.state.date);
    return (
      <div className="One__margins">
        <div className="row ml-3 mb-3">
          <div className="col-md-3 col-6 p-0 m-0 Central__Date">
            {date[0]}, {date[1].substring(date[1].length - 2)}
          </div>
        </div>
        <div className="row align-items-end ">
          <div className="col-md-5 col-12">
            <div>
              <img
                onClick={() => this.showModal(0)}
                src={this.state.news[0].image[0]}
                alt=""
                className="img-fluid One__colImage One_news"
              />
            </div>
          </div>
          <div className="col-md-7 col-12 One_removePM">
            <div onClick={() => this.showModal(0)} className="One_news">
              <p className="One_title">{this.state.news[0].title}</p>
              <p className="One_date mt-mb-3">{this.state.news[0].date}</p>
              <p className="One_description mt-mb-3">
                {this.state.news[0].description}
              </p>
            </div>
          </div>
        </div>

        {this.state.modal === "-1" ? (
          <div></div>
        ) : (
          // console.log(this.state.modal)
          <ModalNews
            data={this.state.news[this.state.modal]}
            closeModal={this.closeModal}
            open={true}
          />
        )}
      </div>
    );
  }
}
