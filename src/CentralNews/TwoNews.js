import React, { Component } from "react";
import "./TwoNews.css";
import { dateHelper } from "./NewsHelper";
import ModalNews from "./ModalNews";

export default class TwoNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.data,
      date: this.props.date,
      modal: "-1",
      selectedNews: {},
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
      <div className="Two__margins">
        <div className="row ml-3 mb-3 ">
          <div className="col-md-3 col-6 p-0 m-0 Central__Date">
            {date[0]}, {date[1].substring(date[1].length - 2)}
          </div>
        </div>
        <div className="row align-items-end ">
          <div className="col-md-5 col-12">
            <div>
              <img
                id="0"
                alt=""
                // onClick={this.showModal}
                onClick={() => this.showModal(0)}
                src={this.state.news[0].image[0]}
                className="img-fluid Two__colImage Two_hover"
              />
            </div>
          </div>
          <div className="col-md-7 col-12 Two_removePM">
            <div className="Two_hover" id="0" onClick={() => this.showModal(0)}>
              <p className="Two_title">{this.state.news[0].title}</p>
              <p className="Two_date mt-md-3">{this.state.news[0].date}</p>
              <p className="Two_description mt-md-3">
                {this.state.news[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-lg-5 mt-md-3 align-items-end">
          <div className="col-md-5 col-12">
            <div>
              <img
                id="1"
                src={this.state.news[1].image[0]}
                onClick={() => this.showModal(1)}
                alt=""
                className="img-fluid Two__colImage Two_hover"
              />
            </div>
          </div>
          <div className="col-md-7 col-12 Two_removePM">
            <div className="Two_hover" id="1" onClick={() => this.showModal(1)}>
              <p className="Two_title">{this.state.news[1].title}</p>
              <p className="Two_date mt-md-3">{this.state.news[1].date}</p>
              <p className="Two_description mt-md-3">
                {this.state.news[1].description}
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
