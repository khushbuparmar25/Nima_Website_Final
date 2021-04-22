import './Download.css';
import {Row, Col } from 'reactstrap';
import React, { Component } from 'react'

export default class Download extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen : false
    }
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
         
            <Row>
          <Col md="4" xs="12" sm="12" className="Download_left-side">
            <img src={this.props.name} className="Download_img" alt="image1"/> 
          </Col>

          <Col md="8" xs="12" sm="12" className="Download_right">
            <div className="Download_right-side">
            
            <div className="Download_title">{this.props.title}</div>
            
             <div className="Download_description">{this.props.description}</div>
            
             <button className="btn btn-light Download_btn"><i class="fa fa-download"></i> <a href={this.props.name} download={this.props.dName} target="_blank">Download</a></button>  
            {/* (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css) included
            in index.html for directly using bootstrap */}
            </div>
          </Col>
        </Row>           
            <hr className="Download_hr"/>
      </div>
    )
  }
}
