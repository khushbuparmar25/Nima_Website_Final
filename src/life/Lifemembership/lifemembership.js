import React from "react";
import "./lifemembership.css";
import pic from "../Imgs/pic.svg";
import arrow from "../Imgs/Arrow 1.svg";
function lifemembership()
{
    return(
    <>
    <div className="Lifemembership_desktop">
    <div className="row Lifemembership_first Lifemembership_row" style={{marginRight:"92px",marginLeft:"98px"}}>
    {/* <hr className="line"/> */}
    <div className="col-sm-6">
        <div className="Lifemembership_heading">NIMA <br/>LIFE<br/> MEMBERSHIP</div>
        <a className="Lifemembership_link" href="#" >DOWNLOAD BROCHURE 
         <img  src={arrow} className="Lifemembership_Image" alt=""/>
        </a>
    </div>
    <div className="col-sm-6">
        <img className="Lifemembership_picture" src={pic} style={{width:"100%"}}/>
    </div>
    <div className="Lifemembership_text">
    Any ISM (Indian System of Medicine) graduate can br member of National Intergrated Medical Association. NIMA works in Three Tiger System i.e. Central Body, State Branch And Local Branch. An ISM graduate can become life member of any  Local branch of NIMA      
    </div>
    </div>
    </div>
    <div className="Lifemembership_mobile">
    <div className="Lifemembership_heading">NIMA <br/>LIFE<br/> MEMBERSHIP</div>
    <a className="Lifemembership_link" href="#" >DOWNLOAD BROCHURE 
         <img  src={arrow} className="Lifemembership_Image" alt=""/>
        </a>
        <img className="Lifemembership_picture" src={pic} style={{width:"100%"}}/>
    <div className="Lifemembership_text">
    Any ISM (Indian System of Medicine) graduate can br member of National Intergrated Medical Association. NIMA works in Three Tiger System i.e. Central Body, State Branch And Local Branch. An ISM graduate can become life member of any  Local branch of NIMA      
    </div>
    
    </div>
    </>)
}
export default lifemembership 