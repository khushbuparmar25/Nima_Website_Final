import React from "react";
import "./History.css";
// import Fab from "@material-ui/core/Fab";
//import { makeStyles } from "@material-ui/core/styles";
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
// import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Register from "./Register.svg";
import mobileData from "./Data.js";
import { Link } from "react-router-dom";

// To detect browser, "npm i detect-browser" is added
const { detect } = require("detect-browser");
const browser = detect();
if (browser) {
  console.log(browser.name);
}

class History extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileText: mobileData,
      text: [
        <pre>
          <span
            style={{
              backgroundColor: "#DB5800",
              color: "#FFFFFF",
              paddingLeft: "21px",
              paddingRight: "21px",
              paddingTop: "2px",
              paddingBottom: "2px",
            }}
          >
            HISTORY
          </span>
          <p className="History__lightColor History__text1">
            National{"\n"}Integrated{"\n"}
            Medical{"\n"}
            <span style={{ color: "#e0a984" }}>Association</span>
          </p>
        </pre>,
        <pre className="History__lightColor" style={{ fontSize: "22px" }}>
          The National Integrated Medical Association (NIMA){"\n"}is an
          <span style={{ color: "#F9B384" }}>
            {" "}
            Indian Non-governmental organization{"\n"}established in{" "}
            <span style={{ color: "#FF812D" }}>1948.</span>
          </span>{" "}
          Integrated{"\n"}medical education was started nearly{"\n"}
          {"\n"}
          <span className="History__75" style={{ color: "#FF812D" }}>
            75
            <span style={{ fontSize: "24px", color: "#F9B384" }}>
              {" "}
              years ago{" "}
            </span>
          </span>
          , and though the graduates{"\n"}
          <span style={{ lineHeight: "0" }}>
            coming out of these courses proved very successful{"\n"}
          </span>
          practitioners ideal for the conditions of this country.
        </pre>,
        <pre style={{ fontSize: "22px", color: "#FFEADC" }}>
          The vested interests from both{" "}
          <span style={{ color: "#FF812D", fontSize: "20px" }}>
            modern medical & pure{"\n"}Ayurved camps,
          </span>
          <span
            style={{ fontSize: "32px", color: "#F9A162", fontWeight: "500" }}
          >
            {" "}
            misguided the{"\n"}authorities{" "}
            <span
              className=""
              style={{ color: "#F9A162", fontWeight: "normal" }}
            >
              and
            </span>{" "}
            created various{"\n"}problems
          </span>{" "}
          <span className="History__lightColor" style={{ color: "#FFEADC" }}>
            for integrated practitioners from the very{"\n"}beginning. Gradually
            the integrated medical community{"\n"} started organising itself to
            face the problems in an organised{"\n"}manner
          </span>
        </pre>,
        <pre className="History__lightColor" style={{ fontSize: "82px" }}>
          All{"\n"}India<p style={{ color: "#f9b384" }}>Conference</p>
        </pre>,
        <pre
          className="History__text3 History__lightColor"
          style={{ fontSize: "18px" }}
        >
          The first major attempt was of the establishment of{"\n"} National
          Medical Association of India in{" "}
          <span
            style={{ color: "#FF812D", lineHeight: "1.5", fontSize: "40px" }}
          >
            1947
          </span>{" "}
          , which{"\n"}soon spread its activities in northern states of the
          country.{"\n"}From
          <span
            style={{ color: "#FF812D", lineHeight: "1.5", fontSize: "40px" }}
          >
            {" "}
            1953
          </span>{" "}
          onwards other Associations of Integrated{"\n"}Practitioners were
          established in the states of Bombay,{"\n"} Mysore and madras,etc. with
          the names as{" "}
          <span style={{ color: "#F9A162" }}>
            Bombay{"\n"}State Integrated Medical Association
          </span>{" "}
          as{" "}
          <span style={{ color: "#FF812D" }}>
            Maharashtra{"\n"}State Integrated Medical Association & Gujrat State
            {"\n"} Integrated Medical Association, Integrated Associations of
            {"\n"} Mysore, etc.
          </span>
        </pre>,
        <pre className="History__lightColor" style={{ fontSize: "18px" }}>
          The attempt to bring all these associations together,{"\n"}
          materialised in
          <span
            style={{ fontSize: "40px", color: "#FF812D", lineHeight: "1.5" }}
          >
            {" "}
            1966{" "}
          </span>
          at <span style={{ color: "#F9A162", fontSize: "24px" }}>
            5th AIC
          </span>{" "}
          of NIMA
          {"\n"}Conference under the Presidentship of
          <span style={{ color: "#FF812D", fontSize: "22px" }}>
            {" "}
            Dr Panna{"\n"}Lal Varshney{" "}
          </span>
          and at the{" "}
          <span style={{ color: "#F9A162", fontSize: "24px" }}>7th</span> All
          India Conference{"\n"}of NIMA held at Bhopal on
          <span style={{ color: "#FF812D", fontSize: "24px" }}> 1.2.1969 </span>
          the Constitution{"\n"}of the National Integrated Medical Association
          was{"\n"}adopted and thus{" "}
          <span
            style={{ color: "#FF812D", fontSize: "24px", lineHeight: "1.5" }}
          >
            NIMA
          </span>{" "}
          <span style={{ color: "#F9A162", fontSize: "18px" }}>was born.</span>
        </pre>,
        <pre className="History__lightColor">
          <span style={{ fontSize: "100px" }}> 1st</span>
          {"\n"}
          <span style={{ color: "#f9b384", fontSize: "70px" }}>Meeting</span>
        </pre>,
        <pre style={{ color: "#ffdfc9", fontSize: "20px" }}>
          The first meeting of the NIMA Central Council{"\n"}was held at Delhi
          on{" "}
          <span style={{ color: "#FF812D", fontSize: "28px", lineHeight: "2" }}>
            6.4.1969
          </span>{" "}
          which{"\n"}
          elected{" "}
          <span style={{ color: "#FF812D", fontSize: "26px", lineHeight: "2" }}>
            Dr P.N.Awasthi
          </span>{" "}
          <span style={{ color: "#F9A162", fontSize: "18px" }}>(Bombay)</span>{" "}
          as the{"\n"}
          <span style={{ color: "#F9A162", fontSize: "24px" }}>
            PRESIDENT
          </span>{" "}
          and{" "}
          <span style={{ color: "#FF812D", fontSize: "26px", lineHeight: "2" }}>
            Dr.K.S.Potdar{" "}
          </span>
          <span style={{ color: "#F9A162", fontSize: "18px" }}>(Delhi)</span> as
          {"\n"}the{" "}
          <span style={{ color: "#F9A162", fontSize: "24px" }}>
            GENERAL SECRETARY
          </span>{" "}
          of NIMA.
        </pre>,
        <pre
          style={{
            color: "#FF812D",
            fontSize: "75px",
            margin: "0px",
            padding: "0px",
          }}
        >
          Regi
          <span
            className="History__lightColor"
            style={{ margin: "0px", padding: "0px" }}
          >
            stration
          </span>
        </pre>,
        <pre
          className="History__lightColor"
          style={{
            fontSize: "16px",
          }}
          // className="textFont"
        >
          Today NIMA is the only all India organisation of the{"\n"}
          <span style={{ color: "#F9A162", fontSize: "28px" }}>
            {" "}
            institutionally trained and{"\n"}qualified practitioners{" "}
          </span>
          of Indian{"\n"}Systems of Medicine, who have undergone the{"\n"}
          conjoint study of Ayurveda, Unani, Siddha & modern{"\n"}medicine, for
          a period of at least four years after Inter{"\n"} Science or XIIth std
          (10 + 2 years education). The{"\n"}
          {"\n"}Association has well organised branches in{" "}
          <span style={{ color: "#E77428", fontSize: "45px" }}>17</span>
          {"\n"}
          <span style={{ color: "#F9A162", fontSize: "18px" }}>
            states and in union
          </span>{" "}
          territories of Delhi{"\n"} & Chandigarh.
        </pre>,
        <p style={{ fontSize: "90px" }} className="History__lightColor">
          <span style={{ color: "#FF812D" }}>Branch</span>es
        </p>,
        <pre
          className="History__lightColor"
          style={{
            fontSize: "16px",
          }}
          // className="textFont"
        >
          Today NIMA is the only all India organisation of the{"\n"}
          <span style={{ color: "#F9A162", fontSize: "28px" }}>
            {" "}
            institutionally trained and{"\n"}qualified practitioners{" "}
          </span>
          of Indian{"\n"}Systems of Medicine, who have undergone the{"\n"}
          conjoint study of Ayurveda, Unani, Siddha & modern{"\n"}medicine, for
          a period of at least four years after Inter{"\n"} Science or XIIth std
          (10 + 2 years education). The{"\n"}
          {"\n"}Association has well organised branches in{" "}
          <span style={{ color: "#E77428", fontSize: "45px" }}>17</span>
          {"\n"}
          <span style={{ color: "#F9A162", fontSize: "18px" }}>
            states and in union
          </span>{" "}
          territories of Delhi{"\n"} & Chandigarh.
        </pre>,
        <pre>
          <span
            style={{ color: "#ffeadc", fontSize: "150px", lineHeight: "1" }}
          >
            lll
          </span>
          {"\n"}
          <span style={{ color: "#ffeadc", fontSize: "80px" }}>Tier</span>
          {"\n"}
          <span style={{ color: "#f9b384", fontSize: "55px" }}>System of </span>
          <span style={{ color: "#ff812d", fontSize: "55px" }}>NIMA</span>
        </pre>,
        <pre>
          <p style={{ color: "#FF812D", fontSize: "30px" }}>
            <b>The Association has a three{"\n"}tier system in its working</b>
          </p>
          <span className="History__lightColor" style={{ fontSize: "18px" }}>
            Local/District Branch.{"\n"}
            {"\n"}
            State Branches/Territorial Branches.{"\n"}
            {"\n"}
            Central Council.
          </span>
        </pre>,
        <pre className="History__lightColor" style={{ fontSize: "20px" }}>
          Minimum <span style={{ color: "#ff812d", fontSize: "26px" }}>11</span>{" "}
          eligible integrated practitioners from{" "}
          <span style={{ color: "#F9A162", fontSize: "24px" }}>
            any{"\n"}town/city/areas
          </span>{" "}
          can come together and function{"\n"}locally as per the
          <span style={{ color: "#F9A162", fontWeight: "bold" }}>
            {" "}
            <b>Constitution of NIMA.</b>
          </span>
          {"\n"}
          {"\n"}
          <span style={{ lineHeight: "2" }}>
            All Local/District Branches in a state form a State Branch{"\n"}of
            NIMA, which is governed by its{" "}
            <span style={{ color: "#E77428", fontSize: "20px" }}>
              state council.
            </span>
          </span>
        </pre>,
        <pre style={{ fontSize: "18px" }} className="History__lightColor">
          Local Branch Managing Committees send their{"\n"} representatives in
          proportion to the number of{"\n"} their members to the{" "}
          <span style={{ color: "#FF812D", fontSize: "22px" }}>
            State Council.
          </span>
          The{"\n"} State Council meets <b>twice</b> a year, elect its Office
          {"\n"}
          Bearers and carries out its duties for the entire{"\n"}State. The
          details regarding the working of the{"\n"} Local/District Branch and
          State Branches can be{"\n"}seen in the booklet of{" "}
          <span style={{ color: "#F9A162", fontSize: "22px" }}>
            By-Laws of NIMA
          </span>
        </pre>,
        <pre style={{ fontSize: "16px" }} className="History__lightColor">
          <span style={{ color: "#FF812D", fontSize: "32px" }}>
            The Central Council
          </span>{" "}
          is{"\n"}formed by the representatives coming from{"\n"} all the State
          Councils
          <span style={{ color: "#F9A162", fontSize: "20px" }}>
            {" "}
            every year.
          </span>
          In{"\n"} proportion to their membership strength. The{"\n"}
          <span style={{ color: "#F9A162", fontSize: "22px" }}>
            {" "}
            STATE SECRETARY{" "}
          </span>
          <span style={{ fontSize: "20px" }}>
            is necessarily {"\n"} the first representative of the{"\n"}
          </span>
          <span style={{ color: "#FF812D", fontSize: "20px" }}>
            {" "}
            State Branch
          </span>{" "}
          on the{" "}
          <span style={{ color: "#F9A162", fontSize: "20px" }}>
            Central {"\n"} Council.
          </span>
        </pre>,
        <pre
          style={{ color: "#FFEADC", fontSize: "18px" }}
          className="History__lightColor"
        >
          The Central Council is the important body in{"\n"}which are vested the
          general control,{"\n"}management and direction of policy of the{"\n"}
          Association. The central council in its annual{"\n"}meeting{" "}
          <span style={{ fontSize: "22px", color: "#F79D60" }}>elects</span> the
          <span style={{ color: "#F79D60", fontSize: "22px" }}>
            {" "}
            Central Office{"\n"}bearers{" "}
          </span>
          who form the
          <span style={{ color: "#F79D60", fontSize: "22px" }}>
            {" "}
            Executive{"\n"}Committee
          </span>{" "}
          of NIMA which executes the{"\n"} programme laid down by the Central
          Council.
        </pre>,
        <pre className="History__lightColor" style={{ fontSize: "75px" }}>
          <span style={{ color: "#FF812D" }}>Member</span>
          ship
        </pre>,
        <pre style={{ fontSize: "16px" }} className="History__lightColor">
          To bring financial stability and to have labour of{"\n"} workers on
          enrolments of annual members, the{"\n"} Association has laid stress on
          enrolling maximim
          <span style={{ color: "#FF812D", fontSize: "24px" }}>
            {" "}
            life{"\n"}members.
          </span>{" "}
          The life membership subscription is{"\n"} kept in
          <span style={{ color: "#F9A162", fontSize: "24px" }}>
            {" "}
            long term fixed deposit in a{"\n"} Nationalised Bank
          </span>{" "}
          and
          <span style={{ color: "#F9A162", fontSize: "24px" }}>
            {" "}
            the annual{"\n"} interest{" "}
          </span>
          accrued on it is distributed.
        </pre>,
        <pre className="History__lightColor" style={{ fontSize: "18px" }}>
          The Association has opened{" "}
          <span style={{ color: "#F9A162", fontSize: "26px" }}>
            Associate{"\n"}Membership for non integrated
            {"\n"}
          </span>
          qualified practitioners who believe in integration.{"\n"}The
          Association year for Branches is from
          <span style={{ color: "#FF812D", fontSize: "30px" }}>
            {" "}
            <span style={{ fontSize: "55px" }}>1</span>
            <span style={{ fontSize: "22px", color: "#F9A162" }}>
              {"\n"}October{" "}
            </span>
            <span style={{ fontSize: "18px", color: "#FFFFFF" }}>to</span>{" "}
            <span style={{ fontSize: "55px" }}>30</span>
            <span style={{ fontSize: "22px", color: "#F9A162" }}>
              {" "}
              September
            </span>
          </span>
        </pre>,
      ],
      currentText: 0,
      wheelCount: 0,
      scrollTop: 0,
      scrollDir: -1, //-1 while scrolling down, +1 while scrolling up
      ticking: false, //for testing, but don't remove this
      lastScrollY: 0,
    };
  }

  componentDidMount() {
    if (browser.name === "safari")
      window.addEventListener("wheel", this.scrollTextSafari);
    else if (browser.name !== "safari")
      window.addEventListener("wheel", this.scrollText);
  }
  componentWillMount() {
    if (browser.name === "safari")
      window.addEventListener("wheel", this.scrollTextSafari);
    else if (browser.name !== "safari")
      window.addEventListener("wheel", this.scrollText);
  }
  updateScrollDir = () => {
    const threshold = 1;
    let scrollY = window.pageYOffset;
    if (Math.abs(scrollY - this.state.lastScrollY) <= 1) {
      console.log("math", Math.abs(scrollY - this.state.lastScrollY));
      this.setState({ ticking: false });
      return;
    }
    if (scrollY > this.state.lastScrollY) {
      this.setState({ scrollDir: -1 }); // if scrolling down
    } else if (scrollY < this.state.lastScrollY) {
      this.setState({ scrollDir: 1 }); //if scrolling up
    }

    this.setState({ lastScrollY: scrollY > 0 ? scrollY : 0 });
    this.setState({ ticking: false });
  };

  // componentDidMount() {
  //   window.addEventListener("wheel", this.scrollText);
  // }
  // componentWillMount() {
  //   window.addEventListener("wheel", this.scrollText);
  // }

  scrollTextSafari = (event) => {
    console.log("direction", this.state.scrollDir);
    console.log("offset", window.pageYOffset);
    if (this.state.ticking === false) {
      window.requestAnimationFrame(this.updateScrollDir);
      this.setState({ ticking: true });
    }

    if (
      this.state.scrollDir > 0 &&
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
    } else if (this.state.scrollDir < 0 && this.state.currentText > 0) {
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
    } else {
      this.setState({ currentText: this.state.currentText });
    }
  };

  scrollText = (event) => {
    if (
      event.deltaY < 0 &&
      this.state.currentText < this.state.text.length - 1
    ) {
      if (this.state.wheelCount === 10) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.remove("animateTop");
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
    } else if (event.deltaY > 0 && this.state.currentText > 0) {
      if (this.state.wheelCount === 10) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.remove("animateTop");
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
  shootdown = (event) => {
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
  render() {
    return (

      <div className="History_maindiv">

        <div className="container History_container">
          {browser.name === "safari" && (
            <div className="row Objective__row">
              <div className="text">
                <br />
                <br />
                <br />
                <br />
                <br />
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
                  <Link
                    to="/register"
                    className="History__link History__registerLink"
                  >
                    Register Yourself{" "}
                    <img
                      src={Register}
                      alt=""
                      className="History__linkImg img-fluid"
                    />
                  </Link>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          )}
          {browser.name !== "safari" && (
            <div className="row History__row">
              <div className="text">
                <p id="paragraphContent" className="History__Data">
                  {
                    this.state.text[this.state.currentText]
                    // this.state.text[20]
                  }
                </p>
                <div className="History__MobileData">
                  <p id="paragraphContentMobile">
                    {
                      this.state.mobileText[this.state.currentText]
                      // this.state.mobileText[7]
                    }
                  </p>
                </div>
                <div>
                  <hr id="lineDivider" />
                  <Link
                    to="/register"
                    className="History__link History__registerLink"
                  >
                    Register Yourself{" "}
                    <img
                      src={Register}
                      alt=""
                      className="History__linkImg img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="MobileView">
            {/* <button onClick={this.shoot}> </button>
          <button onClick={this.shootdown}></button> */}
            {/* <Fab
              size="small"
              color="black"
              onClick={this.shootdown}
              aria-label="up"
            >
              <MdKeyboardArrowUp />
            </Fab>
            <Fab size="small" onClick={this.shoot} aria-label="down">
              <MdKeyboardArrowDown />
            </Fab> */}
          </div>
        </div>
        <div className="footer_upcloud">
          Powered by Upcloud Technology Pvt. Ltd.
        </div>
      </div>
    );
  }
}

export default History;
