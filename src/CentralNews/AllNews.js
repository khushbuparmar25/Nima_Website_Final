import React, { Component, Fragment } from "react";
// import { Description } from "@material-ui/icons";
// import image from "../Images/news.png";
import "./AllNews.css";
import ModalNews from "./ModalNews";
export default class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.location.state.news,
      selectedNews: [],
      initialState: true,
      selecedState: "",
      selecedBranch: "",
      states: [],
      branch: [],
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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  renderList() {}
  // filterState = () => {
  //   let distinctState = [];
  //   this.state.news.map((obj) => distinctState.push(obj.state));
  //   distinctState = [...new Set(distinctState)];
  //   return distinctState;
  // };

  // filterBranch = () => {
  //   let distinctBranch = [];
  //   this.state.news.map((obj) => distinctBranch.push(obj.branch));
  //   distinctBranch = [...new Set(distinctBranch)];
  //   return distinctBranch;
  // };
  // handleChangeState = (event) => {
  //   let state = event.target.value;
  //   const temp = this.state.news.filter((o) => {
  //     if (o.state === state) {
  //       return o;
  //     }
  //     return 0;
  //   });
  //   this.setState({
  //     selectedNews: temp,
  //     selecedState: state,
  //   });
  //   console.log(this.state);
  // };
  // handleChangeBranch = (event) => {
  //   let branch = event.target.value;
  //   const temp = this.state.news.filter((o) => {
  //     if (o.branch === branch) {
  //       return o;
  //     }
  //     return 0;
  //   });
  //   this.setState({
  //     selectedNews: temp,
  //     selecedBranch: branch,
  //   });
  //   console.log(this.state);
  // };
  render() {
    return (
      <div className="AllNews_container">
        {this.state.initialState && (
          <Fragment>
            <div className="AllNews__desktopView">
              <div className="row ">
                {this.state.news.map((n, index) => (
                  <div className="col-12" key={index}>
                    <div
                      className="AllNews__cards row align-items-center"
                      onClick={() => this.showModal(index)}
                    >
                      <div className="col-md-2 m-0 p-0 AllNews__imageCol">
                        <img
                          src={n.image[0]}
                          alt=""
                          className="img-fluid AllNews__image"
                        />
                      </div>
                      <div className="col-md-2 align-self-end AllNews__text">
                        <div>
                          <p className="AllNews__stateText mb-0">
                            {n.state} -{" "}
                          </p>
                          <p className="AllNews__branchText">{n.branch}</p>
                          <p className="AllNews__dateText">{n.date}</p>
                        </div>
                      </div>
                      <div className="col-md-4 AllNews__title">{n.title}</div>
                      <div className="col-md-4 AllNews__descp mobileView">
                        {n.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="AllNews__mobileView">
                <div className="row AllNews__mobileView_row">
                  {this.state.news.map((n, index) => (
                    <div
                      className="col-12 AllNews__cards"
                      key={index}
                      onClick={() => this.showModal(index)}
                    >
                      <div className=" row align-items-center">
                        <div className="col-4 pr-0 AllNews__imageCol">
                          <img
                            src={n.image[0]}
                            alt=""
                            className="img-fluid AllNews__image"
                          />
                        </div>
                        <div className="col-8">
                          <div className="AllNews__title">{n.title}</div>
                          <div className="col-md-2 align-self-end AllNews__text">
                            <div>
                              <span className="AllNews__stateText mb-0">
                                {n.state} -{" "}
                              </span>
                              <span className="AllNews__branchText">
                                {n.branch}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="AllNews__dateText">{n.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Fragment>
        )}

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
