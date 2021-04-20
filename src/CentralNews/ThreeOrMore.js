import React, { Component } from "react";
import { dateHelper } from "./NewsHelper";
import image1 from "../Images/Rectangle 350.png";
import image2 from "../Images/Rectangle 337.png";
import "./ThreeOrMore.css";
import showMore from "../Images/Arrow 7.png";
import AllNews from "./AllNews";
import { Link } from "react-router-dom";
import ModalNews from "./ModalNews";
export default class ThreeOrMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.data,
      date: this.props.date,
      modal: "-1",
      showAll: false,
    };
    // console.log(this.state.news);
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

    if (this.state.news.length === 3) {
      return (
        <div className="Three__margin">
          <div className="row ml-3 mb-3 ">
            <div className="col-md-3 col-6 p-0 m-0 Central__Date">
              {date[0]}, {date[1].substring(date[1].length - 2)}
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-md-5 col-12">
              <div>
                <img
                  src={this.state.news[0].image[0]}
                  onClick={() => this.showModal(0)}
                  alt=""
                  className="img-fluid col1_Image Three_hover"
                />
                <div className="Three_hover" onClick={() => this.showModal(0)}>
                  <p className="Three_col1_date">{this.state.news[0].date}</p>
                  <p className="Three_col1_title">{this.state.news[0].title}</p>
                  <p className="Three_col2_description Three_mobileView">
                    {this.state.news[2].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 Three__removePM">
              <div className="row">
                <div className="col-md-3 col-5 Three_removeDesk">
                  <img
                    src={this.state.news[1].image[0]}
                    className="img-fluid col_2image Three_hover"
                    onClick={() => this.showModal(1)}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover"
                  onClick={() => this.showModal(1)}
                >
                  <p className="Three_col2_date">{this.state.news[1].date}</p>
                  <p className="Three_col2_title">{this.state.news[1].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[1].description}
                  </p>
                </div>
              </div>
              <div className="row mt-lg-4 mt-2">
                <div className="col-md-3 col-5 Three_removeDesk">
                  <img
                    alt=""
                    onClick={() => this.showModal(2)}
                    src={this.state.news[2].image[0]}
                    className="img-fluid col_2image Three_hover"
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover"
                  onClick={() => this.showModal(2)}
                >
                  <p className="Three_col2_date">{this.state.news[2].date}</p>
                  <p className="Three_col2_title">{this.state.news[2].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[1].description}
                  </p>
                </div>
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
    } else if (this.state.news.length === 4) {
      return (
        <div className="Three__margin">
          <div className="row m-3 mb-3 ">
            <div className="col-md-3 col-6 p-0 m-0 Central__Date">
              {date[0]}, {date[1].substring(date[1].length - 2)}
            </div>
          </div>

          <div className="row align-items-start">
            <div className="col-md-5 col-12">
              <div>
                <img
                  src={this.state.news[0].image[0]}
                  onClick={() => this.showModal(0)}
                  alt=""
                  className="img-fluid col1_Image Three_hover"
                />
                <div className="Three_hover" onClick={() => this.showModal(0)}>
                  <p className="Three_col1_date">{this.state.news[0].date}</p>
                  <p className="Three_col1_title">{this.state.news[0].title}</p>
                  <p className="Three_col1_description Three_mobileView">
                    {this.state.news[0].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 Three__removePM">
              <div className="row">
                <div className="col-md-3 col-5 Three_removeDesk ">
                  <img
                    src={this.state.news[1].image[0]}
                    onClick={() => this.showModal(1)}
                    className="img-fluid col_2image Three_hover"
                    alt=""
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover"
                  onClick={() => this.showModal(1)}
                >
                  <p className="Three_col2_date">{this.state.news[1].date}</p>
                  <p className="Three_col2_title">{this.state.news[1].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[1].description}
                  </p>
                </div>
              </div>
              <div className="row mt-lg-4 mt-2">
                <div className="col-md-3 col-5 Three_removeDesk ">
                  <img
                    src={this.state.news[2].image[0]}
                    className="img-fluid col_2image Three_hover"
                    onClick={() => this.showModal(2)}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover "
                  onClick={() => this.showModal(2)}
                >
                  <p className="Three_col2_date">{this.state.news[2].date}</p>
                  <p className="Three_col2_title">{this.state.news[2].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[2].description}
                  </p>
                </div>
              </div>
              <div className="row mt-lg-4 mt-2">
                <div className="col-md-3 col-5 Three_removeDesk">
                  <img
                    src={this.state.news[3].image[0]}
                    onClick={() => this.showModal(3)}
                    alt=""
                    className="img-fluid col_2image Three_hover"
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover"
                  onClick={() => this.showModal(3)}
                >
                  <p className="Three_col2_date">{this.state.news[3].date}</p>
                  <p className="Three_col2_title">{this.state.news[3].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[3].description}
                  </p>
                </div>
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
    } else {
      return (
        <div className="Three__margin">
          <div className="row ml-3 mb-3 ">
            <div className="col-md-3 col-6 p-0 m-0 Central__Date">
              {date[0]}, {date[1].substring(date[1].length - 2)}
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-md-5 col-12">
              <div>
                <img
                  src={this.state.news[0].image[0]}
                  onClick={() => this.showModal(0)}
                  alt=""
                  className="Three_hover img-fluid col1_Image"
                />
                <div className="Three_hover" onClick={() => this.showModal(0)}>
                  <p className="Three_col1_date">{this.state.news[0].date}</p>
                  <p className="Three_col1_title">{this.state.news[0].title}</p>
                  <p className="Three_col2_description Three_mobileView">
                    {this.state.news[2].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 Three__removePM">
              <div className="row">
                <div className="col-md-3 col-5 Three_removeDesk">
                  <img
                    src={this.state.news[1].image[0]}
                    className="Three_hover img-fluid col_2image"
                    onClick={() => this.showModal(1)}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover"
                  onClick={() => this.showModal(1)}
                >
                  <p className="Three_col2_date ">{this.state.news[1].date}</p>
                  <p className="Three_col2_title">{this.state.news[1].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[1].description}
                  </p>
                </div>
              </div>
              <div className="row mt-lg-4 mt-2">
                <div className="col-md-3 col-5 Three_removeDesk Three_hover">
                  <img
                    src={this.state.news[2].image[0]}
                    className="img-fluid col_2image"
                    onClick={() => this.showModal(2)}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover"
                  onClick={() => this.showModal(2)}
                >
                  <p className="Three_col2_date">{this.state.news[2].date}</p>
                  <p className="Three_col2_title">{this.state.news[2].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[2].description}
                  </p>
                </div>
              </div>
              <div className="row mt-lg-4 mt-2">
                <div className="col-md-3 col-5 Three_removeDesk">
                  <img
                    src={this.state.news[3].image[0]}
                    className="img-fluid col_2image Three_hover"
                    onClick={() => this.showModal(3)}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-9 col-7 Three_removeDesk Three_hover"
                  onClick={() => this.showModal(3)}
                >
                  <p className="Three_col2_date">{this.state.news[3].date}</p>
                  <p className="Three_col2_title">{this.state.news[3].title}</p>
                  <p className="Three_col2_description">
                    {this.state.news[3].description}
                  </p>

                  <Link
                    className="Three__showMore mt-md-4 mt-3"
                    to={{
                      pathname: "/allnews",
                      state: { news: this.state.news },
                    }}
                  >
                    <span>
                      Show More
                      <img className="ml-2 showMoreImage" src={showMore} />
                    </span>
                  </Link>
                </div>
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
}
