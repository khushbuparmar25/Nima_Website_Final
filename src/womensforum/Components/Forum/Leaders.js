import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Leaders.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class Leaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
  );
  CustomRightArrow = ({ onClick }) => {
    return <i className="custom-right-arrow" onClick={() => onClick()} />;
  };
  render() {
    return (
      <div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          //   infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // renderButtonGroupOutside={true}
          customLeftArrow={this.customLeftArrow}
          customRightArrow={this.customRightArrow}
          deviceType={this.props.deviceType}
          // customButtonGroup = {this.customButtonGroup}
          //itemClass="carousel-item-padding-40-px"
          // className="ml-5"
        >
          {this.props.leaders.map((leader) => (
            <div key={leader.id} class="card">
              <img className="card-image" src={leader.img} alt="id" />
              <div className="card-body text-center">
                <p className="card-title text-uppercase">{leader.name}</p>
                <p className="card-test">{leader.designation}</p>
                <p className="card-test"> {leader.place}</p>
                <p className="card-test">{leader.phoneNumber}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Leaders;
