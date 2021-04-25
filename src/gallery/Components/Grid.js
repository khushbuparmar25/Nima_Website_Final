import React, { Component } from "react";
import Coverflow from "react-coverflow";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryData: this.props.location && this.props.location.state && this.props.location.state.images ? this.props.location.state.images: [],
    };
    console.log(this.state.galleryData);
  }

  renderImages = () => {
    if(this.state.galleryData && this.state.galleryData.images && this.state.galleryData.images.length > 0 )
    {return this.state.galleryData.images.map((Gimage, index) => (
        <img
          src={Gimage}
          alt={index}
          className="MobileGrid_img"
          // data-action=""
        />
      ));}
  };

  render() {
    // const fn = function () {
    //   /* do your action */
    // }
    return (
      <div className="Grid_container">
        <div className="Grid_title">{this.state.galleryData.title}</div>
        <div className="Grid_des">{this.state.galleryData.description}</div>
        {/* {window.matchMedia("(min-width: 700px)").matches && 
          <Coverflow
            width={960}
            height={700}
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={true}
            clickable={true}
            active={0}
            enableHeading={false}
            // media={{
            //   '@media (max-width: 900px)': {
            //     width: '300px',
            //     height: '500px'
            //   },
            //   '@media (min-width: 900px)': {
            //     width: '960px',
            //     height: '100vh'
            //   }
            // }}
          >
            {/* <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={this.state.galleryData.ima}
            alt='1'
            style={{
              display: 'block',
              width: '100%',
            }}
          /> 
          </div>
            {this.renderImages()}
          </Coverflow>
  
        } */}
        {window.matchMedia("(max-width: 700px)").matches &&
          <div className="MobileGrid_container">
            {this.renderImages()}
          </div>
        }
            </div>
    );
  }
}

export default Grid;
