import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";
import showMore from "../Images/Arrow 7.png";
import ModalNews from "./ModalNews";
export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.data,
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
    console.log(this.state);
    return (
      <div className="Trending__margin">
        <div className="row ml-3 mb-3 ">
          <div className="col-md-3 col-6 p-0 m-0 Central__Date">
            TRENDING NEWS
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-md-6 col-12">
            <div>
              <img
                alt=""
                onClick={() => this.showModal(0)}
                src={this.state.news[0].image[0]}
                className="img-fluid Trending_col1_image Trending_hover"
              />
              <div
                className="Trending_imageText Trending_hover"
                onClick={() => this.showModal(0)}
              >
                <p className="Trending_col1_date">{this.state.news[0].date}</p>
                <p className="Trending__col1_title">
                  {this.state.news[0].title}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 pl-md-0">
            <div className="row">
              <div className="col-12 Trending_mobileMargin">
                <img
                  onClick={() => this.showModal(1)}
                  src={this.state.news[1].image[0]}
                  className="img-fluid Trending_col_2image Trending_hover"
                  alt=""
                />
                <div
                  className="Trending_imageText Trending_hover"
                  onClick={() => this.showModal(1)}
                >
                  <p className="Trending_col2_date">
                    {this.state.news[1].date}
                  </p>
                  <p className="Trending__col2_title">
                    {this.state.news[1].title}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-md-4">
              <div className="col-md-6 col-12 Trending_mobileMargin">
                <img
                  src={this.state.news[2].image[0]}
                  alt=""
                  onClick={() => this.showModal(2)}
                  className="img-fluid Trending_col3_image Trending_hover"
                />
                <div
                  className="Trending_imageText Trending_hover"
                  onClick={() => this.showModal(2)}
                >
                  <p className="Trending_col3_date">
                    {this.state.news[2].date}
                  </p>
                  <p className="Trending_col3_title">
                    {this.state.news[2].title}
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 Trending_mobileMargin">
                <img
                  alt=""
                  onClick={() => this.showModal(3)}
                  src={this.state.news[3].image[0]}
                  className="img-fluid Trending_col3_image Trending_hover"
                />
                <div
                  className="Trending_imageText Trending_hover"
                  onClick={() => this.showModal(3)}
                >
                  <p className="Trending_col3_date">
                    {this.state.news[3].date}
                  </p>
                  <p className="Trending_col3_title">
                    {this.state.news[3].title}
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="Trending__showMore mt-md-4 mt-3"
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
