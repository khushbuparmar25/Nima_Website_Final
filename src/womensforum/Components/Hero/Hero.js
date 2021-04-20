import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import heroDesk from '../../Svg/NIMA Hero-sm.svg';
import heroSm from '../../Svg/Group 725.svg'
function Hero() {
  return (
    <div>
    <img src={heroDesk} alt="hero" className="Hero__hero-img" id="Hero__desktop"/>
    <img src={heroSm} alt="hero" className="Hero__hero-img" id="Hero__mobile"/>
    <div className="Hero__hero">
      <div>
        {/* row for hero component */}
        <div className="Hero__hero-row row">
          <div className="col-12 col-md-6">
            {/* pre title as specified in the design */}
            <div className="Hero__pre-title">NIMA'S WOMEN'S FORUM</div>
            {/* main hero title */}
            <div className="Hero__hero-title">
              THE LARGEST ORGANIZATION
              <br />
              REPRESENTING INSTITUTIONALLY
              <div className="Hero__highlight-cyan"></div>
              <br />
              <div className="Hero__highlight-bottom">QUALIFIED ISM GRADUATES</div>
            </div>
            {/* hero content */}
            <div className="Hero__hero-content">
              Welcome to the official website of the Indian Dental Association,
              the premier organization of dental professionals in India. IDA the
              dignity and honour of its members, besides enhancing the image of
              the profession.
            </div>
            {/* registration link */}
            <div className="Hero__cta">
              RULES & MEMBERSHIP
              <span className="Hero__cta-icon">
                <a href="/">
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    class="bi bi-arrow-right-circle-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
                    />
                  </svg>
                </a>
              </span>
            </div>
            {/* two rectangle cards */}
            <div className="Hero__count Hero__grid-container">
              {/* first rectangle card of "4 state branches" */}
              <div className="Hero__item2 Hero__card1">
                <span className="Hero__card-bold">4 </span> <br />
                <div className="Hero__card-content">STATE BRANCHES</div>
              </div>
              {/* Second card of "66 Local branches" */}
              <div className="Hero__item3 Hero__card2">
                <span className="Hero__card-bold">66</span>
                <br />
                <div className="Hero__card-content">LOCAL BRANCHES</div>
              </div>
            </div>
            <br />
          </div>
          <div className="col-12 col-md-6"></div> 
        </div>
        <br />
        <br />
        <br />
        <div className="main">
        <div className="row" id="Hero__shift-left">
          <div className="col-md-12">
            <div className="Hero__heading">MEET OUR LEADERS</div>
            <div className="Hero__paragraph">
              Welcome to the official website of the NIMA Womens Forum,
              the premier organisation of ISM professionals in India. NIMA
              the dignity and honour of its members, besides enhancing the
              image of the profession.
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
    </div>
  );
}

export default Hero;
