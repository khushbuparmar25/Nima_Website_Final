import React, { Fragment } from "react";
import styles from "./Desk.css";
import president from "../Images/Rectangle 204.png";
import arrow from "../Images/bi_arrow-right.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cross from "../Images/Vector.svg";
import { MdMenu } from "react-icons/md";
import { getDeskData } from "../DataService/DataService";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

class Desk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDoctors: false,
      doctors: [
        {
          image: president,
          designation: "President",
          name: "Dr. V.B. Themburnikar",
          message:
            "Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis autLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis autLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis autLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi",
        },
        {
          image: president,
          designation: "General Secretry",
          name: "Dr. U.S.Pandey ",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autLorem",
        },
        {
          image: president,
          designation: "Treasurer",
          name: "Dr. Ashutosh Kulakrni",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autLorem ",
        },
      ],
      loading: true,
      selectedDoctor: {
        image: null,
        designation: "",
        name: "",
        message: "",
      },
    };
    // this.openModel = this.openModel.bind(this);
  }
  async componentDidMount() {
    window.scrollTo(0, 0);
    const response = await getDeskData();
    if (response === null) {
      console.log("null");
    } else {
      if (response.data.status === "success") {
        console.log(response.data.data);

        this.setState({
          doctors: response.data.data,
          loading: false,
        });
        // this.loadData(response.data.data);
      } else {
      }
    }
  }

  openModel = (doctor) => {
    // window.scrollTo(0, 0);
    this.setState({ showDoctors: true });
    this.setState({ selectedDoctor: doctor });
    // // document.body.scrollTop = 0; // For Safari
    // // document.documentElement.scrollTop = 0;
    // console.log("her");
    // var el = document.getElementsByClassName("Desk__linkMobile");

    // // myDiv.innerHTML = variableLongText;
    // el.scrollTop = el.scrollHeight;

    // setTimeout(function () {
    //   el.scrollTop = 0;
    // }, 500);
    // window.scrollTo(0, 0);
    // setTimeout(() => {
    //   window.scroll ({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // }, 1000);

    // console.log(event.currentTarget.dataset)

    // console.log(doctor);
  };
  closeModel = () => {
    this.setState({ showDoctors: false });
  };

  render() {
    return (
      <Fragment>
        {!this.state.loading && (
          <div className="Desk__main">
            {!this.state.showDoctors && (
              <Fragment>
                <div className="Desk__linkDesktop">
                  <div className="Desk__row  h-100 mr-0 row align-items-center">
                    {/* <div className="col-12">
                <hr className="Desk__hr" />
        </div>*/}
                    <div className="col-6 col-md-6 Desk__col">
                      <h1 className="Desk__h1 Desk__margin">Desk</h1>
                      <br />
                      <p className="Desk__textPara Desk__margin ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <span className="Desk__margin">
                        <a href="#">
                          {" "}
                          <span className="Desk__link">
                            {" "}
                            Click to know more
                            <img
                              src={arrow}
                              alt="Right Arrow"
                              style={{ marginLeft: "1rem" }}
                            />
                          </span>
                        </a>
                      </span>
                    </div>
                    <div className="col-6 pr-0">
                      <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        showArrows={false}
                        ssr={false} // means to render carousel on server-side.
                        // infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        // autoPlaySpeed={1000}
                        keyBoardControl={true}
                        // customRightArrow={<CustomDot />}
                        // customTransition="all .5"
                        // transitionDuration={500}
                        // customButtonGroup={
                        //   <ButtonGroup
                        //     next={this.props.next}
                        //     previous={this.props.previous}
                        //     rest={this.props.rest}
                        //   />
                        // }
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={[
                          "desktop",
                          "tablet",
                          "mobile",
                        ]}
                        deviceType={this.props.deviceType}
                        // customDot={<CustomDot />}
                        itemClass="carousel-item-padding-40-px"
                      >
                        {this.state.doctors.map((doctor, index) => (
                          <div
                            key={index}
                            className="Desk__doctorContainer"
                            onClick={() => this.openModel(doctor)}
                          >
                            <div className="Desk__imageContainer">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="Desk__doctorImage img-fluid"
                              />
                              <p className="Desk__doctorDesignation">
                                {doctor.designation}
                              </p>
                            </div>
                            <p className="Desk__doctorName">{doctor.name}</p>
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                  <div className="Desk_footer_upcloud row">
                    <p>Powered by Upcloud Technology Pvt Ltd</p>
                  </div>
                </div>

                <div className="Desk__linkMobile">
                  <div className="Desk__row h-100 mr-0 row align-items-center ">
                    <div className="mt-3">
                      <MdMenu size={32} className="Desk__buttonNav" />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <h1 className="Desk__h1 Desk__margin">Desk</h1>
                      <p className="Desk__textPara Desk__margin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aut
                      </p>
                    </div>
                    <div className="col-12 m-0 p-0">
                      <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        showArrows={false}
                        ssr={false} // means to render carousel on server-side.
                        // infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        // autoPlaySpeed={1000}
                        keyBoardControl={true}
                        // customTransition="all .5"
                        // transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={[
                          "desktop",
                          "tablet",
                          "mobile",
                        ]}
                        deviceType={this.props.deviceType}
                        itemClass="carousel-item-padding-40-px"
                      >
                        {this.state.doctors.map((doctor, index) => (
                          <div
                            key={index}
                            className="Desk__doctorContainer"
                            onClick={(e) => this.openModel(doctor)}
                          >
                            <div className="Desk__imageContainer">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="Desk__doctorImage img-fluid"
                              />
                              <p className="Desk__doctorDesignation">
                                {doctor.designation}
                              </p>
                            </div>
                            <p className="Desk__doctorName">{doctor.name}</p>
                          </div>
                        ))}
                      </Carousel>

                      <div className="Desk__mobileMargin mb-3 mt-1">
                        <a href="#">
                          <span
                            style={{
                              color: "#51B239",
                              fontWeight: "600",
                              fontSize: "15px",
                            }}
                            className="Desk__link"
                          >
                            {" "}
                            Click to know more
                          </span>
                        </a>
                        <img
                          src={arrow}
                          className="img-fluid"
                          alt="Right Arrow"
                          style={{ marginLeft: "1rem" }}
                        />
                      </div>
                      <div className="Desk_footer_upcloud row">
                        <p>Powered by Upcloud Technology Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
            {this.state.showDoctors && (
              //   <Doctor />
              <Fragment>
                <div className="Desk__linkDesktop Desk__container container">
                  <div className="row h-100 Desk__rowSelected align-items-start">
                    <div className="col-md-6 Desk__marginTop Desk__Col">
                      <button
                        type="btn"
                        className="Desk__closeButton Desk__button"
                      >
                        <img
                          src={cross}
                          alt="close"
                          onClick={this.closeModel}
                        />
                      </button>
                      <h1
                        className="Desk__h1"
                        style={{
                          marginTop: "108px",
                          textTransform: "uppercase",
                        }}
                      >
                        {this.state.selectedDoctor.designation}
                      </h1>
                      <p
                        className="Desk__doctorName"
                        style={{ lineHeight: "1rem" }}
                      >
                        {this.state.selectedDoctor.name}
                      </p>
                      <textarea
                        disabled
                        className="Desk__selectedDoctorDescription"
                      >
                        {this.state.selectedDoctor.message}
                      </textarea>
                    </div>
                    <div className="col-md-6 Desk__col2">
                      <img
                        src={this.state.selectedDoctor.image}
                        alt={this.state.selectedDoctor.name}
                        className="Desk__selectedDoctorImage img-fluid"
                      />
                      <p className="Desk__selectedDoctorDesignation">
                        {this.state.selectedDoctor.designation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Desk__linkMobile">
                  <div
                    className="row Desk__row align-items-center"
                    style={{ margin: "1.7rem", textTransform: "uppercase" }}
                  >
                    <div className="col-12" style={{ padding: 0 }}>
                      <div
                        className="row align-items-center"
                        style={{ padding: "0", margin: "0" }}
                      >
                        <div
                          className="col-8"
                          style={{ padding: "0", margin: "0" }}
                        >
                          <h1 className="Desk__h1Mobile">
                            {this.state.selectedDoctor.designation}
                          </h1>
                        </div>
                        <div
                          className="col-4"
                          // style={{ padding: "0", margin: "0" }}
                        >
                          <button
                            type="btn"
                            className="Desk__closeButton Desk__button"
                            style={{ float: "right" }}
                          >
                            <img
                              src={cross}
                              alt="close"
                              onClick={this.closeModel}
                              height="18px"
                              width="18px"
                            />
                          </button>
                        </div>
                      </div>
                      <p
                        className="Desk__doctorName"
                        style={{ lineHeight: "1rem" }}
                      >
                        {this.state.selectedDoctor.name}
                      </p>
                      <div style={{ marginLeft: "0.1rem" }}>
                        <img
                          src={this.state.selectedDoctor.image}
                          alt={this.state.selectedDoctor.name}
                          className="Desk__selectedDoctorImage img-fluid"
                        />
                        <p className="Desk__selectedDoctorDesignation">
                          {this.state.selectedDoctor.designation}
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-12 "
                      style={{ padding: 0, marginLeft: "0.1rem" }}
                    >
                      <p style={{ marginTop: "35px", fontSize: "14px" }}>
                        {this.state.selectedDoctor.message}
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
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
      </Fragment>
    );
  }
}

export default Desk;
