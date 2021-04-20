//import { Description } from "@material-ui/icons";
import React, { Component } from "react";
import { Fragment } from "react";
import image from "../Images/news.png";
import "./BranchNews.css";
import { MdMenu } from "react-icons/md";
import ModalBranchNews from "./ModalBranch";
import { getBranchNews } from "../DataServices/BranchNews";


export default class BranchNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          date: "4 April, 2020 09:30 AM",
          title:
            "The Election Will Bring a Hurricane of Misinformation The Election Will Bring a Hurricane of Misinformation The Election Will Bring a Hurricane of Misinformation",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          state: "Maharashtra",
          branch: "Mumbai",
          district: "Mumbai",
          image: [image, image],
          details: "",
          author: "",
        },
        {
          date: "4 April, 2020 09:30 AM",
          title: "The Election Will Bring a Hurricane of Misinformation",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          state: "Haryana",
          branch: "Mumbai",
          district: "U",
          image: [image],
          details: "",
          author: "",
        },
        {
          date: "4 April, 2020 09:30 AM",
          title: "The Election Will Bring a Hurricane of Misinformation",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          state: "Delhi",
          branch: "New Delhi",
          image: [image],
          district: "Delhi",
          details: "",
          author: "",
        },
        {
          date: "4 September, 2020 09:30 AM",
          title: "The Election Will Bring a Hurricane of Misinformation",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua ",
          state: "Maharashtra",
          branch: "Pune",
          district: "Pune",
          details: "",
          author: "",
          image: [image],
        },
        {
          date: "4 April, 2020 09:30 AM",
          title: "The Election Will Bring a Hurricane of Misinformation",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          state: "Haryana",
          branch: "Patna",
          district: "Mumbai",
          image: [image],
          details: "",
          author: "",
        },
        {
          date: "4 April, 2020 09:30 AM",
          title: "The Election Will Bring a Hurricane of Misinformation",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          state: "Maharashtra",
          branch: "Mumbai",
          image: [image],
          district: "Mumbai",
          details: "",
          author: "",
        },
        {
          date: "4 September, 2020 09:30 AM",
          title: "The Election Will Bring a Hurricane of Misinformation",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua ",
          state: "Maharashtra",
          branch: "Pune",
          details: "",
          district: "Mumbai",
          author: "",
          image: [image],
        },
      ],
      selectedNews: [],
      initialState: true,
      selectedState: "",
      selectedBranch: "",
      selectedDistrict: "",
      states: [],
      open: false,
      modal: "-1",
      branch: [],
      districts: [],
      loading: true,
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

  async componentDidMount() {
    const response = await getBranchNews();
    if (response === null) {
      console.log("null");
    } else {
      if (response.data.status === "success") {
        console.log(response.data.data);
        this.setState({
          news: response.data.data,
          selectedNews: response.data.data,
          loading: false,
        });
        // this.loadData(response.data.data);
      } else {
      }
    }

    // this.setState({ selectedNews: this.state.news });
    const distState = this.filterState();
    // const distBranch = this.filterBranch();
    this.setState({
      states: distState,
    });
  }
  renderList() {}
  filterState = () => {
    let distinctState = [];
    this.state.news.map((obj) => distinctState.push(obj.state));
    distinctState = [...new Set(distinctState)];
    return distinctState;
  };

  filterBranch = (temp) => {
    let distinctBranch = [];
    temp.map((obj) => distinctBranch.push(obj.branch));
    distinctBranch = [...new Set(distinctBranch)];
    return distinctBranch;
  };
  filterDistrict = (temp) => {
    let distinctDistrict = [];
    temp.map((obj) => distinctDistrict.push(obj.district));
    distinctDistrict = [...new Set(distinctDistrict)];
    return distinctDistrict;
  };
  handleChangeState = (event) => {
    let state = event.target.value;
    const temp = this.state.news.filter((o) => {
      if (o.state === state) {
        return o;
      }
      return 0;
    });
    let branch = this.filterBranch(temp);
    let district = this.filterDistrict(temp);
    this.setState({
      selectedNews: temp,
      selectedState: state,
      branch: branch,
      selectedBranch: "",
      districts: district,
    });
    console.log(this.state);
  };
  handleChangeBranch = (event) => {
    let branch = event.target.value;
    const temp = this.state.news.filter((o) => {
      if (o.branch === branch && o.state === this.state.selectedState) {
        return o;
      }
      return 0;
    });
    this.setState({
      selectedNews: temp,
      selectedBranch: branch,
    });
    console.log(this.state);
  };
  handleChangeDistrict = (event) => {
    let district = event.target.value;
    const temp = this.state.news.filter((o) => {
      if (o.district === district && o.state === this.state.selectedState) {
        return o;
      }
      return 0;
    });
    this.setState({
      selectedNews: temp,
      selectedDistrict: district,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        {!this.state.loading && (
          <div className="BranchNews_container">
            <div className="BranchNews__desktopView">
              <div className="row mt-5 ">
                <p className="BranchNews__selection col-5">
                  {this.state.selectedState} - {this.state.selectedBranch}
                </p>
                <div className="col-7  d-flex justify-content-end">
                  <select
                    className="BranchNews__selectState"
                    onChange={this.handleChangeState}
                    id="state"
                  >
                    <option
                      value=""
                      className="BranchNews_option"
                      disabled
                      selected
                      defaultValue
                    >
                      Select State
                    </option>
                    {this.state.states.map((state, index) => (
                      <option
                        className="BranchNews_option"
                        value={state}
                        key={index}
                      >
                        {state}
                      </option>
                    ))}
                  </select>
                  <select
                    className="BranchNews__selectState"
                    onChange={this.handleChangeDistrict}
                    id="state"
                  >
                    <option
                      value=""
                      className="BranchNews_option"
                      disabled
                      selected
                      defaultValue
                    >
                      Select District
                    </option>
                    {this.state.districts.map((district, index) => (
                      <option
                        className="BranchNews_option"
                        value={district}
                        key={index}
                      >
                        {district}
                      </option>
                    ))}
                  </select>

                  <select
                    className="BranchNews__selectState"
                    onChange={this.handleChangeBranch}
                    id="state"
                  >
                    <option
                      value=""
                      className="BranchNews_option"
                      disabled
                      selected
                      defaultValue
                    >
                      Select Branch
                    </option>
                    {this.state.branch.map((branch, index) => (
                      <option
                        className="BranchNews_option"
                        value={branch}
                        key={index}
                      >
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <Fragment>
              <div className="row BranchNews__desktopView">
                {this.state.selectedNews.map((n, index) => (
                  <div className="col-12" key={index}>
                    <div
                      className="BranchNews__cards Branch_hover row align-items-center"
                      onClick={() => this.showModal(index)}
                    >
                      <div className="col-md-2 BranchNews__imageCol">
                        <img
                          src={n.image[0]}
                          alt=""
                          className="img-fluid BranchNews__image"
                        />
                      </div>
                      <div className="col-md-2 align-self-end BranchNews__text">
                        <div>
                          <p className="BranchNews__stateText mb-0">
                            {n.state} -{" "}
                          </p>
                          <p className="BranchNews__branchText">{n.branch}</p>
                          <p className="BranchNews__dateText">{n.date}</p>
                        </div>
                      </div>
                      <div className="col-md-4 BranchNews__title">
                        {n.title}
                      </div>
                      <div className="col-md-4 BranchNews__descp mobileView">
                        {n.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="BranchNews__mobileView">
                <div className="row  mt-5 ">
                  <div className="col-2">
                    <MdMenu className="Menu_btn" size={20} />
                  </div>
                  <div className="col-10 p-0 text-center">
                    <select
                      className="BranchNews__selectState"
                      onChange={this.handleChangeState}
                      id="state"
                    >
                      <option value="" disabled selected defaultValue>
                        State
                      </option>
                      {this.state.states.map((state, index) => (
                        <option value={state} key={index}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <select
                      className="BranchNews__selectState"
                      onChange={this.handleChangeDistrict}
                      id="state"
                    >
                      <option value="" disabled selected defaultValue>
                        District
                      </option>
                      {this.state.districts.map((district, index) => (
                        <option value={district} key={index}>
                          {district}
                        </option>
                      ))}
                    </select>
                    <select
                      className="BranchNews__selectBranch"
                      onChange={this.handleChangeBranch}
                      id="branch"
                    >
                      <option value="" disabled selected defaultValue>
                        Branch
                      </option>
                      {this.state.branch.map((branch, index) => (
                        <option value={branch} key={index}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="BranchNews__selection row ">
                  {this.state.selectedState} {this.state.selectedBranch}
                </div>
                <div className="row ">
                  {this.state.selectedNews.map((n, index) => (
                    <div
                      className="col-12 BranchNews__cards Branch_hover"
                      key={index}
                      onClick={() => this.showModal(index)}
                    >
                      <div className=" row align-items-center">
                        <div className="col-4 p-0 BranchNews__imageCol">
                          <img
                            src={n.image[0]}
                            alt=""
                            className="img-fluid BranchNews__image"
                          />
                        </div>
                        <div className="col-8">
                          <div className="BranchNews__title">{n.title}</div>
                          <div className="col-md-2 align-self-end BranchNews__text">
                            <div>
                              <span className="BranchNews__stateText mb-0">
                                {n.state} -{" "}
                              </span>
                              <span className="BranchNews__branchText">
                                {n.branch}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="BranchNews__dateText">{n.date}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="Branch_footer_upcloud row">
                <p>Powered by Upcloud Technology Pvt Ltd</p>
              </div>
            </Fragment>
            {this.state.modal === "-1" ? (
              <div></div>
            ) : (
              // console.log(this.state.modal)
              <ModalBranchNews
                data={this.state.news[this.state.modal]}
                closeModal={this.closeModal}
                open={true}
              />
            )}
          </div>
        )}
        {this.state.loading && (
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Loading....
          </h1>
        )}
      </div>
    );
  }
}
