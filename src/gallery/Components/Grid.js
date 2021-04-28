import React, { Component } from "react";
import Coverflow from "react-coverflow";
import "./Grid.css";
import Demo from './images/nima_icon.png'

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryData: this.props.location && this.props.location.state && this.props.location.state.images ? this.props.location.state.images: [],
    };
    console.log(this.state.galleryData);
  }

  renderImages = () => {
    if(this.state.galleryData.images) {
      return this.state.galleryData.images.map((Gimage, index) => (
        <img
          src={Gimage}
          alt={index}
          className="MobileGrid_img"
          // data-action=""
        />
        
      ));
    } else {
      return <img src={Demo}></img>
    }
  };

  render() {
    // const fn = function () {
    //   /* do your action */
    // }
    return (
      <div className="Grid_container">
        <div className="Grid_title">{this.state.galleryData.title}</div>
        <div className="Grid_des">{this.state.galleryData.description}</div>
        <div>
        <Coverflow width="960" height="500"
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={true}
          clickable={true}
          active={0}
        >
          {/* <img src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/> */}
          {/* <img src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/> */}
          {this.renderImages()}
        </Coverflow>
        </div>
        <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div>
        </div>
    );
  }
}

export default Grid;
