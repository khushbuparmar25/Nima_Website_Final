import './App.css';
import { Container} from 'reactstrap';
import Downloads from './Components/Download.js';
import React, { Component } from 'react';
import axios from "axios";
import ham from './svg/ham.png';

export default class download extends Component {
    constructor() {
        super();
        this.state = {
          filesData : []
        }
      }
    
      async componentDidMount(){
        await axios
          .get('https://nimaaaa-project.herokuapp.com/downloads')
          .then((response) => {
            console.log("api Incoming", response.data)
            this.setState({
                filesData:response.data.data
              }, ()=> console.log("The Array Needed",response.data))  
            
          })
          .catch((error) => {
            console.log(error);
          });
        
      }
    
      renderFiles =()=>{
        return(
          this.state.filesData && this.state.filesData.length > 0 ? this.state.filesData.map((file,index)=>(
            <Downloads name={file.image} title={file.title} description={file.description} dName={index}/>
          )): null
        ) 
      }
    
      render() {
        console.log("hey",this.state.filesData)
        return (
          <div>
            {/* <div className="ham_div"><img src={ham} alt="menu icon" className="ham_icon"/></div> */}
            <hr className="Download_fhr" />
             
            <Container>
            <div className="download_title">Downloads</div>
              <div className="main">
                {this.renderFiles()}
              </div>
            </Container>
            {/* <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div> */}
          </div>
        )
      }
}
