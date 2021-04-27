import React from "react";
import "./lifemembership.css";
import pic from "../Imgs/pic.svg";
import arrow from "../Imgs/Arrow 1.svg";
function lifemembership()
{
    return(
    <>
    <div className="desktop">
    <div className="row Lifemembership_first" style={{marginRight:"92px",marginLeft:"98px"}}>
    {/* <hr className="line"/> */}
    <div className="col-sm-6">
        <div className="heading">NIMA <br/>LIFE<br/> MEMBERSHIP</div>
        <a className="link" href="#" >DOWNLOAD BROCHURE 
         <img  src={arrow} className="Image" alt=""/>
        </a>
    </div>
    <div className="col-sm-6">
        <img className="picture" src={pic} style={{width:"100%"}}/>
    </div>
    <div className="Lifemembership_text">
    Any ISM (Indian System of Medicine) graduate can br member of National Intergrated Medical Association. NIMA works in Three Tiger System i.e. Central Body, State Branch And Local Branch. An ISM graduate can become life member of any  Local branch of NIMA      
    </div>
    </div>
    </div>
    <div className="mobile">
    <div className="heading">NIMA <br/>LIFE<br/> MEMBERSHIP</div>
    <a className="link" href="#" >DOWNLOAD BROCHURE 
         <img  src={arrow} className="Image" alt=""/>
        </a>
        <img className="picture" src={pic} style={{width:"100%"}}/>
    <div className="Lifemembership_text">
    Any ISM (Indian System of Medicine) graduate can br member of National Intergrated Medical Association. NIMA works in Three Tiger System i.e. Central Body, State Branch And Local Branch. An ISM graduate can become life member of any  Local branch of NIMA      
    </div>
    
    </div>
    </>)
}
export default lifemembership 