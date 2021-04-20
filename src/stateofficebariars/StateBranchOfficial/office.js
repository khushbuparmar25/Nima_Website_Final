import React from 'react';
import './office.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import illustrate from './illustration.svg';
import president from '../images/man.png'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  class Office extends React.Component{
    constructor(props)
    { 
        super(props);
        this.state = {
            showDoctors: false,
            doctors: [
                {
                    image:president,
                    designation: "President",
                    name: "Dr. V.B. Themburnikar",
                    // description:
                },
                {
                    image:president,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey "
                },
                {
                    image:president,
                    designation: "Treasurer",
                    name:"Dr. Ashutosh Kulakrni"
                }
            ],
            selectedImage:null,
            selectedDesignation: "",
            selectedName:"",
        }
        // this.openModel = this.openModel.bind(this);

    }
    openModel = (event) => {
        this.setState({ showDoctors: true });
        console.log(event.target)
        // console.log(doctor);
    }
    closeModel = () => {
        this.setState({ showDoctors: false});        
    }
    render()
    {
      console.log(this.state.doctors);
        return(
            <div className="container">
              <hr className="hr1"/>
              <div className="row row1">
                <div className ="col-sm-12 col-md-6 txt" >
                  <h1>State Branch <br/>Officials</h1>
                  <p className="textPara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare
                  </p>
                </div>
                <div className ="col-sm-12 col-md-6 illustration" >
                  <img src={illustrate} alt="Illustration"/>
                </div>
              </div>
              <div className="row navbar">
                Navbar
              </div>
              <hr className="hr2"/>
              <div className="row row3">
                <div className="col-sm-12 col-md-3">
                  <h2>MAHARASHTRA</h2>
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="row cards">
                  <Carousel
                    className="mobileCarousel"
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    // infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    itemClass="carousel-item-padding-40-px"
                  >
                    {
                                this.state.doctors.map((doctor,index) =>
                                    <div key={index} className="doctorContainer" onClick={this.openModel}>
                                       <div className="imageContainer">
                                       <img src={doctor.image} alt={doctor.name} className="doctorImage" />
                                       <p className="doctorDesignation">{doctor.designation}</p>
                                       </div>
                                        <p className="doctorName">{doctor.name}</p>
                                    </div>
                                )
                   }
                  </Carousel>
                  </div>
                </div>
              </div>
                    {/* <div className ="col-12 col-md-6 txt" >
                
                        
                    </div> 
                    <div className="col-12 col-md-6" >
                        <Carousel
                            className="mobileCarousel"
                            swipeable={true}
                            draggable={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            // infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlaySpeed={1000}
                            keyBoardControl={true}
                            // customTransition="all .5"
                            // transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            itemClass="carousel-item-padding-40-px"
                            >
                            </Carousel>   
                    </div> */}
            </div>
        ); 


    }



}

export default Office;