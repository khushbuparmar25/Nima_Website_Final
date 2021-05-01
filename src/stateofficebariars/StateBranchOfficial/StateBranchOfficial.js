import React, { Fragment } from "react";
import "./StateBranchOfficial.css";
import president from "../Images/Rectangle 204.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdMenu } from "react-icons/md";
import illustrate from "../Images/State branch official.svg";
import { doctors } from "./DoctorDetails";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter,
  Link,
  NavLink,
} from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};
class StateBranchOfficials extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorDetails: doctors,
      selectedState: "Maharashtra",
      selectedDoctors: [],
      distinctStates: [],
    };
    // this.openModel = this.openModel.bind(this);
  }

  changeState = (event) => {
    event.preventDefault();
    this.setState({ selectedState: event.target.name });
    let state = event.target.name;
    const temp = this.state.doctorDetails.filter((o) => {
      if (o.state === state) {
        return o;
      }
      return 0;
    });
    this.setState({
      selectedDoctors: temp,
    });
    this.Carousel.goToSlide(0, true);
  };
  componentDidMount() {
    this.setState({ doctorDetails: doctors });
    let state = this.state.selectedState;
    const temp = this.state.doctorDetails.filter((o) => {
      if (o.state === state) {
        return o;
      }
      return 0;
    });

    this.setState({ selectedDoctors: temp });
  }
  filterPlace = () => {
    let distinctPlace = [];
    this.state.doctorDetails.map((obj) => distinctPlace.push(obj.state));
    distinctPlace = [...new Set(distinctPlace)];
    return distinctPlace;
  };

  render() {
    return (
      <div className="StateBranchOfficials">
        <div className="StateBranchOfficials__firstdiv">
          <Fragment>
            {/* <div className="StateBranchOfficials__mobileBtn">
              <MdMenu size={32} className="StateBranchOfficials__buttonNav" />
            </div> */}
            <div
              className="row StateBranchOfficials__row1"
              style={{ marginLeft: "0", marginRight: "0" }}
            >
              <div className="col-12">
                {/* <hr className="StateBranchOfficials__hr1" /> */}
              </div>
              <div className="col-sm-12 col-md-6 txt">
                <div className="StateBranchOfficials__para">
                  <h1 className="StateBranchOfficials__h1">
                    State Branch <br />
                    Officials
                  </h1>
                  <p className="StateBranchOfficials__textPara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur congue lacinia pretium. Vivamus sit amet blandit
                    elit. Mauris fringilla lorem et commodo malesuada. Nulla
                    quis pulvinar risus. Nunc tincidunt ante vitae erat
                    facilisis lobortis. Duis sapien nisl, ullamcorper ac
                    accumsan non, eleifend vel purus. Sed pretium tortor diam,
                    vel pharetra augue lobortis quis. Aliquam sed lacinia
                    lectus. Duis finibus leo et nunc dignissim, vitae hendrerit
                    arcu sagittis. Quisque sed augue iaculis, ornare
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <img
                  src={illustrate}
                  alt="illustration"
                  className="StateBranchOfficials__illustration img-fluid"
                />
              </div>
            </div>
          </Fragment>
          <Fragment>
            <div className="StateBranchOfficials__nav-container">
              {this.filterPlace().map((state, index) => (
                <button
                  type="button"
                  class={
                    this.state.selectedState === state
                      ? "btn btn-link StateBranchOfficials__btn StateBranchOfficials__active"
                      : "btn btn-link StateBranchOfficials__btn "
                  }
                  name={state}
                  onClick={this.changeState}
                >
                  {state}
                </button>
              ))}
            </div>
            {/* <BrowserRouter>
                <div
                  className="col-sm-12 StateBranchOfficials__nav-container"
                  style={{
                    overflowX: "scroll",
                    overflowY: "hidden",
                    scrollbarColor: "transparent",
                  }}
                >
                  {<Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">}

                  <NavLink
                    to="/Gujarat"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Gujarat
                  </NavLink>
                  <NavLink
                    to="/Haryana"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Haryana
                  </NavLink>
                  <NavLink
                    to="/Karnataka"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Karnataka
                  </NavLink>
                  <NavLink
                    to="/Maharashtra"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Maharashtra
                  </NavLink>
                  <NavLink
                    to="/Punjab"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Punjab
                  </NavLink>
                  <NavLink
                    to="/Gujarat"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Gujarat
                  </NavLink>
                  <NavLink
                    to="/Haryana"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Haryana
                  </NavLink>
                  <NavLink
                    to="/Karnataka"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Karnataka
                  </NavLink>
                  <NavLink
                    to="/Maharashtra"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Maharashtra
                  </NavLink>
                  <NavLink
                    to="/Punjab"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Punjab
                  </NavLink>
                  <NavLink
                    to="/Gujarat"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Gujarat
                  </NavLink>
                  <NavLink
                    to="/Haryana"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Haryana
                  </NavLink>
                  <NavLink
                    to="/Karnataka"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Karnataka
                  </NavLink>
                  <NavLink
                    to="/Maharashtra"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Maharashtra
                  </NavLink>
                  <NavLink
                    to="/Punjab"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Punjab
                  </NavLink>
                  <NavLink
                    to="/Gujarat"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Gujarat
                  </NavLink>
                  <NavLink
                    to="/Haryana"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Haryana
                  </NavLink>
                  <NavLink
                    to="/Karnataka"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Karnataka
                  </NavLink>
                  <NavLink
                    to="/Maharashtra"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Maharashtra
                  </NavLink>
                  <NavLink
                    to="/Punjab"
                    className="nav-style"
                    activeStyle={{ color: "black" }}
                  >
                    Punjab
                  </NavLink>
                </div>
                { <Switch>
        <Route exact path="/Gujarat" component={Gujarat} />
        <Route exact path="/">
          <Redirect to="/Gujarat" />
        </Route>
        <Route exact path="/Haryana" component={} />
        <Route exact path="/Karnataka" component={} />
        <Route exact path="/Punjab" component={} />
        <Route exact path="/Maharashtra" component={} />
      </Switch> }
    </BrowserRouter>*/}
          </Fragment>
          {/* <hr align="center" className="StateBranchOfficials__hr2" /> */}
        </div>

        <div className="row StateBranchOfficials__row3">
          <div className="col-12 col-md-3">
            <h2 className="StateBranchOfficials__stateName">
              {this.state.selectedState.toUpperCase()}
            </h2>
          </div>
          <div className="col-12 col-md-9 StateBranchOfficials__row4">
            <Carousel
              className="StateBranchOfficials__mobileCarousel"
              swipeable={true}
              draggable={false}
              responsive={responsive}
              showArrows={false}
              ref={(el) => (this.Carousel = el)}
              ssr={false} // means to render carousel on server-side.
              // infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              // autoPlaySpeed={1000}
              keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              deviceType={this.props.deviceType}
              itemClass="carousel-item-padding-40-px"
            >
              {this.state.selectedDoctors.map((doctor, index) => (
                <div
                  key={index}
                  className="StateBranchOfficials__doctorContainer"
                >
                  <div className="StateBranchOfficials__imageContainer">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="StateBranchOfficials__doctorImage"
                    />
                    <p className="StateBranchOfficials__doctorDesignation">
                      {doctor.designation}
                    </p>
                  </div>
                  <p className="StateBranchOfficials__doctorName">
                    {doctor.name}
                  </p>
                  {!!doctor.place.length && (
                    <p className="StateBranchOfficials__doctorState">
                      ( {doctor.place} )
                    </p>
                  )}
                  <p className="StateBranchOfficials__doctorMobile">
                    Mob. :{doctor.mobile}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/* <div className="footer_upcloud ">
          <p>Powered by Upcloud Technology Pvt Ltd</p>
        </div>*/}
      </div> 
    );
  }
}

export default StateBranchOfficials;
