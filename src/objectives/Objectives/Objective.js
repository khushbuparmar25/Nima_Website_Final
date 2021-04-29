import React from "react";
import "./Objective.css";
// import Fab from "@material-ui/core/Fab";
// import { makeStyles } from "@material-ui/core/styles";
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
// import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MdKeyboardArrowUp, MdCropSquare } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Register from "./Register.svg";
import mobileData from "./Content";



// To detect browser, "npm i detect-browser" is added
const { detect } = require('detect-browser');
const browser = detect();
if (browser) {
  console.log(browser.name);
}
//browser.name will hold the name of the browser



class Objective extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileText: mobileData,
      text: [
        <pre
          style={{ lineHeight: "1.5", fontSize: "49px" }}
          className="Objective__lightColor"
        >
          The National Integrated{"\n"}Medical Association was{"\n"} established
          at{" "}
          <span
            style={{ color: "#FF812D", fontWeight: "700", fontSize: "64px" }}
          >
            <b>Delhi on{"\n"} 14th April 1948.</b>
          </span>
        </pre>,
        <pre className="Objective__lightColor">
          <p style={{ fontSize: "20px" }}>
            NIMA was established to protect the rights of{"\n"}ISM graduates.
            {"\n"}
            Another important aim of the Association was{" "}
          </p>
          <p
            className="point2"
            style={{
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            to achieve the status for{"\n"}Integrated Medicine as the{"\n"}
            National Medicine of India{"\n"}
          </p>
          <p className="point2" style={{ fontSize: "20px" }}>
            by creating and consolidating public opinion in{"\n"}favour of
            Integrated Medicine.
          </p>
        </pre>,
        <pre className="Objective__lightColor">
          <span style={{ fontSize: "24px" }}>What has</span>
          {"\n"}
          <span
            style={{ color: "#FF812D", fontWeight: "600", fontSize: "48px" }}
          >
            the
            {"\n"}
            Association
            {"\n"}
            achieved
          </span>
          {"\n"}
          <span style={{ fontSize: "36px" }}> so far? </span>
        </pre>,
        <pre className="Objective__lightColor">
          <span
            style={{ fontSize: "40px", color: "#ff812d", fontWeight: "600" }}
          >
            The first 20 years
          </span>
          <p style={{ fontSize: "20px" }}>
            were spent in spreading the organization in{"\n"}different parts of
            the country and to solve{"\n"}local problems of practitioners.
          </p>
          <p style={{ fontWeight: "600", fontSize: "20px" }} className="point2">
            IT was at the time of discussion of IMHCC Bill{"\n"} 1968 in the
            Parliament that the movement{"\n"} got consolidated.
          </p>
        </pre>,
        <pre className="Objective__lightColor" style={{ fontSize: "22px" }}>
          For amendments in the Bill{"\n"}the NIMA prepared a detailed{"\n"}
          <span
            style={{
              color: "#FF812D",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "1.5",
            }}
          >
            Memorandum and{"\n"}
            undertook a{"\n"}campaign to meet{"\n"}
            400 MPs{" "}
          </span>
          at Delhi explaining to them{"\n"} the necessity of amending the Bill
        </pre>,
        <pre className="Objective__lightColor" style={{ marginBottom: "0" }}>
          <p style={{ fontSize: "22px" }}>
            The Association representatives appeared
            <p style={{ fontWeight: "600" }}>
              {" "}
              before the Joint Select Committee of
            </p>
            <pre
              className="point2 Objective__lightColor"
              style={{ marginBottom: "0" }}
            >
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "22px",
                  marginBottom: "0",
                }}
              >
                Parliament and advocated the{" "}
                <span
                  style={{
                    fontSize: "40px",
                    color: "#FF812D",
                    fontWeight: "600",
                  }}
                >
                  cause{"\n"}
                </span>
              </p>
              <span
                style={{
                  fontSize: "40px",
                  color: "#FF812D",
                  fontWeight: "600",
                }}
              >
                of Integrated
              </span>
              {"\n"}
              <span
                style={{
                  fontSize: "40px",
                  color: "#FF812D",
                  fontWeight: "600",
                }}
              >
                Medicine and its
              </span>
              {"\n"}
              <span
                style={{
                  fontSize: "40px",
                  color: "#FF812D",
                  fontWeight: "bold",
                  marginBottom: "0",
                }}
              >
                graduates.
              </span>
            </pre>
          </p>
        </pre>,

        <pre className="Objective__lightColor" style={{ marginBottom: "30px" }}>
          <p style={{ color: "#FF812D", fontWeight: "600", fontSize: "45px" }}>
            As a result of these efforts{" "}
          </p>
          <p className="point2" style={{ fontSize: "22px" }}>
            a number of MPs from all political parties supported the{"\n"}
            demands of NIMA and some important amendments{"\n"}were adopted
            while on some amendments the Hon.{"\n"}Health Minister Shri K. K.
            shah assured that they will be{"\n"}done ‘under Rule-making Power’.
          </p>
        </pre>,
        <pre className="Objective__lightColor" style={{ marginBottom: "60px" }}>
          <span style={{ fontSize: "20px" }}>
            It was revealed later{"\n"}that separate schedule for Intregrated
            practitioners and{"\n"}
          </span>
          <span style={{ fontWeight: "600", fontSize: "30px" }}>
            clear safeguard of right to practice{"\n"} modern medicine cannot be
            done{"\n"} under Rule-making Power.{"\n"}
          </span>
          {"\n"}
          <span className="point2" style={{ fontSize: "22px" }}>
            The Minister had deceived his own colleagues by that{"\n"}assurance.{" "}
            <span style={{ color: "#FF812D", fontWeight: "600" }}>
              If these amendments were adopted in 1969-70{"\n"}Intregrated
              graduates would have enjoyed better status and{"\n"}privileges for
              ever.
            </span>
          </span>
        </pre>,
        <pre className="Objective__lightColor" style={{ marginBottom: "30px" }}>
          <span style={{ fontSize: "60px", fontWeight: "300" }}>The </span>{" "}
          <span style={{ color: "#FF812D", fontSize: "100px" }}>12</span>
          <span style={{ fontSize: "100px" }}>year</span>
          {"\n"}
          <span style={{ fontSize: "65px", color: "#FF812D" }}>long</span>
          <p
            style={{ color: "#ffdfc9", fontSize: "22px", marginTop: "20px" }}
            className="point2"
          >
            <span>struggle in </span>
            <span style={{ fontWeight: "bolder", fontSize: "24px" }}>
              Supreme Court{" "}
            </span>
            lead by NIMA
          </p>
        </pre>,
        <pre className="Objective__lightColor">
          <span
            style={{
              fontWeight: "bolder",
              fontSize: "32px",
            }}
          >
            safeguarding the rights
          </span>{" "}
          <span
            style={{
              fontSize: "26px",
            }}
          >
            of Integrated{"\n"}medical practitioners is another creditable{"\n"}
            achievements for NIMA.
          </span>
          {"\n"}
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "14px",
            }}
            className="point2"
          >
            The NIMA has also succeeded in getting the Status Acts in
            <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
              {" "}
              Delhi, Maharashtra,{"\n"}Karnataka, Punjab, MP,
            </span>{" "}
            etc.amended to uphold the dignity and rights of{"\n"}integrated
            practitioners. It must also be remembered that Drug Rule 2 (ee)
            (iii)
            {"\n"}
            {"\n"}
            under which ISM Practitioners are permitted by State Governments to
            pratice Modern.{"\n"} Medicine was in corporated because of the
            efforts of NIMA.
          </p>
        </pre>,
        <pre className="Objective__lightColor">
          <span>
            The NIMA has{" "}
            <span
              style={{
                fontWeight: "600",
                fontSize: "40px",
                lineHeight: "1.5",
              }}
            >
              continually{"\n"}strived to get status for{"\n"}integrated
              graduates in{"\n"}
            </span>
          </span>
          {"\n"}
          <p
            className="point2"
            style={{
              color: "#FF812D",
              lineHeight: "1.5",
              fontWeight: "700",
              fontSize: "40px",
            }}
          >
            <span>State Govt.</span>
            {"\n"}
            <span>&amp;</span>
            {"\n"}
            <span>Municipal Medical Services.</span>
          </p>
        </pre>,
        <pre className="Objective__lightColor">
          <span style={{ fontSize: "19px" }}>
            It appeared and argued before Pay Commisions to get better{"\n"}
            scales for intregrated graduates.
          </span>
          {"\n"}
          {"\n"}
          It organized{" "}
          <span
            style={{ color: "#FF812D", fontWeight: "600", fontSize: "24px" }}
          >
            teachers Associations in ISM{"\n"}Colleges
          </span>
          {"\n"}
          <span style={{ fontWeight: "600", fontSize: "19px" }}>
            {" "}
            fought
          </span>{" "}
          for{" "}
          <span style={{ fontWeight: "600", fontSize: "19px" }}>
            rise in their pay-scales.
          </span>
          <p className="point2" style={{ marginTop: "15px", fontSize: "19px" }}>
            So, whether an intregrated graduate is in practise or in service
            {"\n"}or in teaching, them.
            <p
              style={{
                fontWeight: "600",
                fontSize: "30px",
                marginTop: "15px",
              }}
            >
              NIMA has held its umbrella for{"\n"}all of them and protected
              them.
            </p>
          </p>
        </pre>,
        <pre className="Objective__lightColor">
          <p style={{ color: "#FF812D", fontWeight: "600", fontSize: "75px" }}>
            Unfortunately
          </p>
          <p
            style={{ fontSize: "20px" }}
            className="point2 Objective__lightColor"
          >
            the general practitioners, who are the mainstay of NIMA, get{"\n"}
            organized only when there is a calamity and get disorganized{"\n"}as
            soon as it is over. Hence it is forgotten that the aim of the{"\n"}
            Association is to establish Integrated Medicine as the{"\n"}National
            Medicine of India.
          </p>
          <p
            style={{ fontSize: "20px" }}
            className="point3 Objective__lightColor"
          >
            The whole world is turning towards Ayurved and{"\n"}holistic
            medicine.
          </p>
        </pre>,
        <pre>
          <span style={{ fontSize: "24px" }}>
            <span style={{ color: "#FFA263", textAlign: "center" }}>
              Hungary
            </span>
            {"\n"} <span style={{ color: "#FF812D" }}>Russia</span>
            {"\n"}
            <span style={{ color: "#FF812D", float: "left" }}>UK</span>
            {"\n"} <span style={{ color: "#FFA263" }}>Italy</span>
            {"\n"}
            <span style={{ color: "#FF812D" }}>Germany</span>
            {"\n"}
            <span style={{ color: "#FF812D" }}>Australia</span>
            {"\n"}
            <span style={{ color: "#FFA263" }}>South Africa</span>
            {"\n"}
            <span style={{ color: "#FFA263", float: "left" }}>Argentina</span>
          </span>
          {"\n"}
          <p className="Objective__lightColor" style={{ fontSize: "17px" }}>
            China has successfully implemented the{"\n"}programme of Intregrated
            Medicine.
          </p>
        </pre>,
        <pre className="Objective__lightColor">
          <span
            style={{
              color: "#FF812D",
              fontWeight: "bolder",
              fontSize: "50px",
            }}
          >
            Our Health Minister{"\n"}supports Intregrated{"\n"}Medicine
          </span>{" "}
          <span style={{ fontSize: "22px" }}>
            and is keen to introduce Ayurvedic{"\n"} subjects in the curriculum
            of Modern Medical Colleges.{"\n"}
          </span>
          {"\n"}
          <p className="point2" style={{ fontSize: "22px" }}>
            NIMA has to take lead now and make every efforts to establish{"\n"}
            Intregrated Medicine as the National Medicine of India.
          </p>
        </pre>,
        <pre className="Objective__lightColor" style={{ marginBottom: "60px" }}>
          <span style={{ color: "#ffdfc9", fontSize: "40px" }}>This is </span>
          <span
            style={{ color: "#FF812D", fontSize: "55px", fontWeight: "700" }}
          >
            the most{"\n"}opportune time
          </span>
          {"\n"}
          <span style={{ color: "#ffdfc9", fontSize: "40px" }}>
            {" "}
            for NIMA to get rejuvenated{"\n"}and invigorated for fulfilling
            {"\n"}its aims and objects
          </span>
        </pre>,
        <pre>
          <span
            style={{ color: "#FF812D", fontWeight: "bolder", fontSize: "65px" }}
          >
            So,{"\n"}
          </span>
          <span
            className="Objective__lightColor point2"
            style={{ fontSize: "55px" }}
          >
            What should be this{"\n"}rejuvenation{"\n"}programme?
          </span>
        </pre>,
        <pre className="Objective__lightColor" dir="rtl">
          <ul style={{ listStyle: "square", fontSize: "22px" }}>
            <li>Get stronger with 100% enrollment of members</li>

            <li className="point2">
              Every member should enroll at least 2 new life members
            </li>

            <li className="point3">
              Every member should be a regular subscriber of JNIMA by paying at
              least{"\n"} Rs. 500/- for 5 years’ subscription
            </li>
            <li className="point4">
              Make NIMA Students Forums in all ISM Colleges stronger
            </li>

            <li className="point5">
              Hold one-day workshops at Taluka level educating every member
              {"\n"}and worker about the aims and objects of NIMA, legal rights
              of{"\n"}
              Intregrated graduates, importance of medico social projects etc
            </li>
          </ul>
        </pre>,
        <pre className="Objective__lightColor" dir="rtl">
          <ul style={{ listStyle: "square", fontSize: "22px" }}>
            <li>
              Increasing personal contacts with the media and{"\n"}
              representative of people –{" "}
              <span style={{ color: "#FF812D" }}>
                {" "}
                the MLA, MP etc. and{"\n"}acquainting them with the importance
                of Intregrated{"\n"}Medicine
              </span>{" "}
              and the amendments needed in the state{"\n"}and IMCC Act for
              proper protection of Intrgrated{"\n"}graduates
            </li>

            <li className="point2" style={{ marginTop: "10px" }}>
              Writing regular articles in newspapers and{"\n"}periodicals on
              importance of Integrated medicine{"\n"}and way to achieve it
            </li>
          </ul>
        </pre>,
        <pre>
          <span
            style={{ color: "#FF812D", fontSize: "65px", fontWeight: "700" }}
            className="Objective__joinus"
          >
            {" "}
            Come Join Us,
          </span>
          {"\n"}
          <span className="Objective__lightColor" style={{ fontSize: "35px" }}>
            Fulfill the minimum{"\n"}programme as early as{"\n"} possible to
            make it{"\n"}
            stronger
          </span>
        </pre>,
        <pre>
          <span
            style={{ color: "#FF812D", fontSize: "65px", fontWeight: "700" }}
          >
            To protect you{"\n"}
            better
          </span>{" "}
          <span className="Objective__lightColor" style={{ fontSize: "30px" }}>
            &amp; for better{"\n"}healthcare of common man in{"\n"}India.
          </span>
        </pre>,
      ],
      currentText: 0,
      wheelCount: 0,
      scrollTop: 0,
      scrollDir: -1,      //-1 while scrolling down, +1 while scrolling up
      ticking: false,     //for testing, but don't remove this
      lastScrollY: 0,
    };
  }
  
   componentDidMount() {
     if(browser.name === "safari")
     window.addEventListener("wheel", this.scrollTextSafari);
     else if(browser.name != "safari") 
     window.addEventListener("wheel", this.scrollText);
   }
   componentWillMount() {
    if(browser.name === "safari")
     window.addEventListener("wheel", this.scrollTextSafari);
     else if(browser.name != "safari")
     window.addEventListener("wheel", this.scrollText);
   }

  
  updateScrollDir = () => {
    const threshold = 1
    let scrollY = window.pageYOffset;
    if (Math.abs(scrollY - this.state.lastScrollY) <= 1) {
      console.log("math", Math.abs(scrollY - this.state.lastScrollY))
      this.setState({ ticking: false })
      return;
    }
    if (scrollY > this.state.lastScrollY) {
      this.setState({ scrollDir: -1 })  // if scrolling down
    }
    else if (scrollY < this.state.lastScrollY) {
      this.setState({ scrollDir: 1 })  //if scrolling up
    }

    this.setState({ lastScrollY: scrollY > 0 ? scrollY : 0 })
    this.setState({ ticking: false })
  }

  scrollTextSafari = (event) => {
    console.log("direction", this.state.scrollDir)
    console.log("offset", window.pageYOffset)
    if (this.state.ticking === false) {
      window.requestAnimationFrame(this.updateScrollDir)
      this.setState({ ticking: true })
    }

    if (
      this.state.scrollDir < 0 &&
      this.state.currentText < this.state.text.length - 1
    ) {
      if (this.state.wheelCount === 10) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.remove("animationTop");
        para.classList.add("animation");
        setTimeout(() => {
          para.classList.remove("animation");
          this.setState({ currentText: this.state.currentText + 1 });
          line.classList.add("lineAnimation");
          para.classList.add("animatebottom");
        }, 1000);
        line.classList.remove("lineAnimation");
      } else {
        this.setState({ wheelCount: this.state.wheelCount + 1 });
      }
    }
    else if (this.state.scrollDir > 0 && this.state.currentText > 0) {
      if (this.state.wheelCount === 10) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.add("animationFade");
        setTimeout(() => {
          this.setState({ currentText: this.state.currentText - 1 });
          para.classList.remove("animationFade");
          para.classList.add("animationTop");
          line.classList.add("lineAnimation");
        }, 1000);
        para.classList.remove("animationTop");
        line.classList.remove("lineAnimation");
      } else {
        this.setState({ wheelCount: this.state.wheelCount + 1 });
      }
    }

    else {
      this.setState({ currentText: this.state.currentText });
    }
  };


  scrollText = (event) => {
    if (
      event.deltaY > 0 &&
      this.state.currentText < this.state.text.length - 1
    ) {
      if (this.state.wheelCount === 10) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.add("animation");
        setTimeout(() => {
          para.classList.remove("animation");
          this.setState({ currentText: this.state.currentText + 1 });
          line.classList.add("lineAnimation");
          para.classList.add("animatebottom");
        }, 1000);
        line.classList.remove("lineAnimation");
      } else {
        this.setState({ wheelCount: this.state.wheelCount + 1 });
      }
    } else if (event.deltaY < 0 && this.state.currentText > 0) {
      if (this.state.wheelCount ===10) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.add("animationFade");
        setTimeout(() => {
          this.setState({ currentText: this.state.currentText - 1 });
          para.classList.remove("animationFade");
          para.classList.add("animationTop");
          line.classList.add("lineAnimation");
        }, 1000);
        para.classList.remove("animationTop");
        line.classList.remove("lineAnimation");
      } else {
        this.setState({ wheelCount: this.state.wheelCount + 1 });
      }
    } else {
      this.setState({ currentText: this.state.currentText });
    }
  };


  shoot = (event) => {
    event.preventDefault();
    if (this.state.currentText < this.state.text.length - 1) {
      const para = document.getElementById("paragraphContentMobile");

      const line = document.getElementById("lineDivider");
      para.classList.remove("animatebottom");
      para.classList.add("animation");

      setTimeout(() => {
        para.classList.remove("animation");
        this.setState({ currentText: this.state.currentText + 1 });
        line.classList.add("lineAnimation");
        para.classList.add("animatebottom");
      }, 1000);
      line.classList.remove("lineAnimation");
    }
  };

  shootdown = (event) => {
    event.preventDefault();

    if (this.state.currentText > 0) {
      const para = document.getElementById("paragraphContentMobile");
      const line = document.getElementById("lineDivider");
      para.classList.remove("animatebottom");
      para.classList.add("animationFade");
      setTimeout(() => {
        this.setState({ currentText: this.state.currentText - 1 });
        para.classList.remove("animationFade");
        para.classList.add("animationTop");
        line.classList.add("lineAnimation");
      }, 1000);
      para.classList.remove("animationTop");
      line.classList.remove("lineAnimation");
    }
  };
  render() {
    return (
      <div className="Objectives_container">
      <div className="container Objective_base">

    {browser.name === "safari" &&       
        <div className="row Objective__row">
          <div className="text">
          <br /><br /><br /><br /><br /> 
            <p
              id="paragraphContent"
              style={{ marginBottom: "0" }}
              className="Objective__Data"
            >
              {
                this.state.text[this.state.currentText]
                // this.state.text[20]
              }
            </p>
            
            <div className="Objective__MobileData">
              <p id="paragraphContentMobile">
                {
                  this.state.mobileText[this.state.currentText]
                  // this.state.mobileText[20]
                }
              </p>
            </div>
            <div>
              <hr id="lineDivider" />
              <a className="Objective__link Objective__registerLink" href="#">
                Register Yourself{" "}

                <img
                  src={Register}
                  alt=""
                  className="Objective__linkImg img-fluid"
                />
              </a>
              <br /><br /><br /><br /><br />   <br /><br /><br /><br /><br /> 
            </div>
           
          </div>
        </div>}

        {browser.name != "safari" &&       
        <div className="row Objective__row">
          <div className="text">
        
            <p
              id="paragraphContent"
              style={{ marginBottom: "0" }}
              className="Objective__Data"
            >
              {
                this.state.text[this.state.currentText]
                // this.state.text[20]
              }
            </p>
            
            <div className="Objective__MobileData">
              <p id="paragraphContentMobile">
                {
                  this.state.mobileText[this.state.currentText]
                  // this.state.mobileText[20]
                }
              </p>
            </div>
            <div>
              <hr id="lineDivider" />
              <a className="Objective__link Objective__registerLink" href="#">
                Register Yourself{" "}

                <img
                  src={Register}
                  alt=""
                  className="Objective__linkImg img-fluid"
                />
              </a>
       
            </div>
           
          </div>
        </div>}
       
        <div className="MobileView">
          {/* <button onClick={this.shoot}> </button>
        <button onClick={this.shootdown}></button> */}
          {/* <Fab size="small" color="black" onClick={this.shootdown} aria-label="up">
            <MdKeyboardArrowUp />
          </Fab>
          <Fab size="small" onClick={this.shoot} aria-label="down">
            <MdKeyboardArrowDown />
          </Fab> */}
        </div>
        </div>
        {/* <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div> */}
      </div>
    );
  }
}

export default Objective;
