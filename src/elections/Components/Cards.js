import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'
import icon from '../svg/Icon.svg'

function Cards() {
    return(
    <div className="container-fluid mobile-card-container">

    <div className="Cards_hr">
        <span className="Cards_hr_text" >
            DATE : 20 Oct 2020
        </span>
    </div>


    <div className="row text-center flex-nowrap flex-sm-wrap Cards_row_styling">
    <div className=" col-10 col-sm-2  mx-sm-auto">
        <div class="card card-background ElectionsCard_background">
            <div className="card-img-div ElectionCard_img">
              <img className="card-image ElectionCard_image" src={icon} alt="id" /> 
            </div>
            <div className="card-body ElectionCard_body">
                <div className="card-title ElectionCard_title"> 
                    <a href="#" className="card-link ElectionCard_link">
                        NIMA CC ELECTION RESULT
                    </a>
                </div>
                <div className="Election_dates">
                    Updated: 22 June 2020
                </div>
            </div>
        </div>
    </div>
      
    <div className=" col-10 col-sm-2 mx-sm-auto ">
    <div class="card card-background ElectionsCard_background">
            <div className="card-img-div ElectionCard_img">
              <img className="card-image ElectionCard_image" src={icon} alt="id" /> 
            </div>
            <div className="card-body ElectionCard_body">
                <div className="card-title ElectionCard_title"> 
                    <a href="#" className="card-link ElectionCard_link">
                        NIMA CC FINAL CANDIDATE LIST
                    </a>
                </div>
                <div className="Election_dates">
                Updated: 22 June 2020
                </div>
            </div>
        </div>
    </div>
      
    <div class=" col-10 col-sm-2 mx-sm-auto ">
    <div class="card card-background ElectionsCard_background">
            <div className="card-img-div ElectionCard_img">
              <img className="card-image ElectionCard_image" src={icon} alt="id" /> 
            </div>
            <div className="card-body ElectionCard_body">
                <div className="card-title ElectionCard_title"> 
                    <a href="#" className="card-link ElectionCard_link">
                        NIMA CC VALID INVALID CANDIDATE LIST
                    </a>
                </div>
                <div className="dates_exception">
                Updated: 22 June 2020
                </div>
            </div>
        </div>
    </div>

    <div class="col-10 col-sm-2 mx-sm-auto">
    <div class="card card-background ElectionsCard_background">
            <div className="card-img-div ElectionCard_img">
              <img className="card-image ElectionCard_image" src={icon} alt="id" /> 
            </div>
            <div className="card-body ElectionCard_body">
                <div className="card-title ElectionCard_title"> 
                    <a href="#" className="card-link ElectionCard_link">
                        NIMA CC CANDIDATE LIST
                    </a>
                </div>
                <div className="Election_dates">
                Updated: 22 June 2020
                </div>
            </div>
        </div>
    </div>   
  </div>

     <div className="Cards_hr">
        <span className="Cards_hr_text" >
            DATE : 20 Oct 2020
        </span>
     </div>      
  
     <div className="row text-center flex-nowrap flex-sm-wrap Cards_row_styling2">
    <div className=" col-10 col-sm-2  mx-sm-auto2">
        <div class="card card-background ElectionsCard_background">
            <div className="card-img-div ElectionCard_img">
              <img className="card-image ElectionCard_image" src={icon} alt="id" /> 
            </div>
            <div className="card-body ElectionCard_body">
                <div className="card-title ElectionCard_title"> 
                    <a href="#" className="card-link ElectionCard_link">
                        NIMA CC FINAL VOTER LIST
                    </a>
                </div>
                <div className="Election_dates">
                    Updated: 22 June 2020
                </div>
            </div>
        </div>
    </div>
      
    <div className=" col-10 col-sm-2 mx-sm-auto2">
    <div class="card card-background ElectionsCard_background">
            <div className="card-img-div ElectionCard_img">
              <img className="card-image ElectionCard_image" src={icon} alt="id" /> 
            </div>
            <div className="card-body ElectionCard_body">
                <div className="card-title ElectionCard_title"> 
                    <a href="#" className="card-link ElectionCard_link">
                        NIMA CC FINAL CANDIDATE LIST
                    </a>
                </div>
                <div className="Election_dates ">
                Updated: 22 June 2020
                </div>
            </div>
        </div>
    </div> 
  </div>


  
  
  <br/><br/><br/><br/><br/>
  {/* <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div> */}
</div>
    )
}

export default Cards;
    
