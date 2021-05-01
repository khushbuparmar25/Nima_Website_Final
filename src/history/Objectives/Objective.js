import React from "react";
import "./Objective.css";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
// import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MdKeyboardArrowUp, MdCropSquare } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Register from "./Register.svg"

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: 'transparent',
  },

}));

// const classes = useStyles();

class Objective extends React.Component {
  constructor() {
    super();
    this.state = {
      text: [
        <p>
          <p style={{ color: "white" }} className="textFont2">
            The National Integrated <br /> Medical Association was <br /> established at <span style={{ color: "#FF812D", fontWeight: "1000" }} className="textFont1">Delhi on 14 th April 1948. </span></p>
        </p>,
        <p><p style={{ fontSize: "11px" }}>NIMA was established to protect the rights of <br /> ISM graduates.
         <br />
         Another important aim of the Association was </p>
          <p className="point2"> <p style={{ fontSize: "20px", fontWeight: "bold" }}>to achieve the status for <br /> Integrated Medicine as the <br /> National Medicine of India</p>
            <p style={{ fontSize: "11px" }}> by creating and consolidating public opinion in <br /> favour of Integrated Medicine.
        </p></p></p>,
        <p >
          <p>What has</p>
          <p style={{ color: "#FF812D", fontWeight: "bold", fontSize: "26px" }}> the
<br />
Association
<br />
achieved</p>
          <p> so far? </p>
        </p>
        ,
        <p><p>
          <span style={{ color: "#FF812D", fontWeight: "bold", fontSize: "30px" }}>The first 20 years</span>
          <p style={{ fontSize: "14px" }}>were spent in spreading the organization in <br /> different parts of the country and to solve <br />local
         problems of practitioners.</p></p>
          <p className="point2" style={{ fontWeight: "bold", fontSize: "14px" }}>
            IT was at the time of discussion of IMHCC Bill <br /> 1968 in the Parliament that the movement <br /> got
         consolidated.</p></p>,
        <p>
          For amendments in the Bill<br />
         the NIMA prepared a detailed <p style={{ color: "#FF812D", fontWeight: "bold", fontSize: "25px" }}>Memorandum and <br />undertook a <br /> campaign to meet </p><p><span style={{ color: "#FF812D", fontWeight: "bold", fontSize: "25px" }}>400 MPs</span> at Delhi
         explaining to them <br /> the necessity of amending the Bill</p></p>,
        <p>
          <p style={{ fontSize: "15px" }}> The Association representatives appeared<span style={{ fontWeight: "bold", fontSize: "15px" }}> before the Joint Select Committee of</span>
            <br />
            <br />

            <div className="point2">
              <p style={{ fontSize: "16px", fontWeight: "bold" }} >Parliament and advocated the <span style={{ color: "#FF812D", fontWeight: "bold", fontSize: "24px" }}>cause </span>
              </p>
              <p style={{ color: "#FF812D", fontWeight: "bold", fontSize: "25px" }}>
                of Integrated </p><p style={{ color: "#FF812D", fontWeight: "bold", fontSize: "25px" }}>
                Medicine and its </p><p style={{ color: "#FF812D", fontWeight: "bold", fontSize: "25px" }}>
                graduates.</p>

            </div>
          </p></p>

        ,
        <p><span style={{ color: "#FF812D", fontWeight: "bold", fontSize: "25px" }}>
          As a result of these efforts </span>
          <p className="point2" style={{ fontSize: "11px" }}>
            a number of MPs from all political parties supported the <br /> demands of NIMA and some important
         amendments <br /> were adopted while on some amendments the <br /> Hon. Health Minister Shri K. K. shah
         assured that they will be <br /> done ‘under Rule-making Power’.</p>
         {/* <p className="point3">Trying out</p>
         <p className="point4">Trying out</p>
         <p className="point5">Trying out</p> */}
         </p>,
        <p> <p>
          <span style={{ fontSize: "14px" }}>It was revealed later that separate schedule for Intregrated practitioners and</span>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>clear safeguard of right to practice <br />modern
         medicine cannot be done<br /> under Rule-making Power.</p></p>
          <p className="point2" style={{ fontSize: "16px" }}> The Minister had deceived his own colleagues by that assurance. <span style={{ color: "#FF812D" }}>If these amendments were adopted
         in 1969-70 Intregrated graduates would have enjoyed better status and privileges for ever.</span></p></p>,
        <p> <p>
          <span style={{ fontSize: "32px" }}>The </span> <span style={{ color: "#FF812D", fontWeight: "bold", fontSize: "44px" }}>12</span><span style={{ fontSize: "40px" }}>year </span>
          <p style={{ fontSize: "32px", color: "#FF812D" }}>long</p></p>
          <div className="point2">
            <p style={{ color: "#ffdfc9" }}>
              <span>struggle in </span><span style={{ fontWeight: "bolder", fontSize: "16px" }}>Supreme Court </span>
         lead by NIMA</p>
          </div>
        </p>,
        <p><p style={{ fontSize: "22px", color: "#ffdfc9" }}><span style={{ fontWeight: "bolder", fontSize: "26px", color: "#ffdfc9" }}>
          safeguarding the rights</span> of Integrated <br /> medical practitioners is another creditable <br /> achievements
         for NIMA.</p>
          <p className="point2" style={{ fontSize: "16px", color: "#ffdfc9" }}>
            The NIMA has also succeeded in getting the Status Acts in Delhi, <span style={{ fontSize: "17px", fontWeight: "bolder" }}>Maharashtra, <br /> Karnataka, Punjab,
         MP,</span> etc.amended to uphold the dignity and rights of <br /> integrated practitioners. It must also be
         remembered that Drug Rule 2 (ee) (iii)
         <br />
            <br />
         under which ISM Practitioners are permitted by State Governments to pratice Modern. Medicine
         was in corporated because of the efforts of NIMA.</p></p>,
        <p><p>
          The NIMA has <span style={{ fontWeight: "bold", fontSize: "20px" }}>continually <br /> strived to get status for <br /> integrated graduates in</span></p>
          <p className="point2" style={{ color: "#FF812D", fontWeight: "bolder", fontSize: "25px" }}>
            <p>State Govt.</p>
            <p>&amp;</p>
            <p>Municipal Medical Services.</p></p></p>,
        <p style={{ color: "#ffdfc9" }}> <p>
          <p style={{ fontSize: "20px" }}>It appeared and argued before Pay Commisions to get better scales for intregrated graduates.</p>
          <br></br>It organized <span style={{ color: "#FF812D", fontWeight: "bold", fontSize: "30px" }}>teachers Associations in ISM Colleges</span>
          <br></br><span style={{ fontWeight: "bold" }}> fought</span> for <span style={{ fontWeight: "bold" }}> rise in their pay-scales.</span></p>
          <p className="point2" >
            So, whether an intregrated graduate is in practise or in service <br /> or in teaching, them.
         <p style={{ fontWeight: "bold", fontSize: "35px" }}>
              NIMA has held its umbrella for all of them and protected them.</p></p></p>,
        <p> <p style={{ color: "#FF812D", fontWeight: "bold", fontSize: "44px" }}>
          Unfortunately</p>
          <p className="point3" style={{ color: "#ffdfc9", fontSize: "10px" }}>the general practitioners, who are the mainstay of NIMA, get<br /> organized only when there is a calamity and get disorganized <br /> as soon as it is over. Hence it is forgotten that the aim of the <br /> Association is to establish Integrated Medicine as the <br></br> National Medicine of India.
         </p><p className="point4" style={{ color: "#ffdfc9", fontSize: "12px" }}>
            The whole world is turning towards Ayurved and <br /> holistic medicine.</p></p>,
        <p>
          Australia
          Italy
          South Africa
          Germany Russia Hungary
          UK Argentina
         <p style={{ color: "#ffdfc9" }} className="textFont3">
            China has successfully implemented the programme of <br /> Intregrated Medicine.</p></p>,
        <p><p><span style={{ color: "#FF812D", fontWeight: "bolder", fontSize: "30px" }}>
          Our Health Minister <br /> supports Intregrated <br /> Medicine</span> <span style={{ fontSize: "12px" }}>and is keen to introduce Ayurvedic <br /> subjects in
         the curriculum of Modern Medical Colleges.</span></p>
          <p className="point2" style={{ fontSize: "12px" }}>
            NIMA has to take lead now and make every efforts to establish Intregrated Medicine as the
         National Medicine of India.</p></p>,
        <p> <span style={{ fontSize: "25px", color: "#ffdfc9" }}>
          This is </span><span style={{ color: "#FF812D", fontSize: "40px" }}>the most <br /> opportune time</span><br /><span style={{ fontSize: "22px", color: "#ffdfc9" }}> for NIMA to get rejuvenated <br /> and invigorated for fulfilling <br /> its aims
         and objects</span></p>,

        <p>
          <p style={{ color: "#FF812D", fontWeight: "bolder", fontSize: "36px" }}>So,</p>
          <p style={{ fontSize: "32px", color: "#ffdfc9" }}> What should be this <br /> rejuvenation programme?</p></p>,
        //   <p style={{color:"#ffdfc9"}}> <p className="point1" >
        //  Get stronger with 100% enrollment of members<i class="fa fa-square" style={{color:"#FF812D",marginLeft:"3%",fontSize:"12px"}}></i>
        //   </p>
        //  <p className="point2"> 
        //  Every member should enroll at least 2 new life members.<i class="fa fa-square" style={{color:"#FF812D",marginLeft:"3%",fontSize:"12px"}}></i>
        //  </p>
        //  <p className="point3"> 
        //  Every member should be a regular subscriber of JNIMA by paying at least <i class="fa fa-square" style={{color:"#FF812D",marginLeft:"3%",fontSize:"12px"}}></i> <br></br>Rs. 500/- for 5 years’
        //  subscription. </p>
        //  <p className="point1"> 
        //  Make NIMA Students Forums in all ISM Colleges stronger. <i class="fa fa-square" style={{color:"#FF812D",marginLeft:"3%",fontSize:"12px"}}></i>
        //  </p>
        //  <p className="point1">
        //  Hold one-day workshops at Taluka level educating every member <br></br> and worker about the aims and
        //  objects of NIMA, legal rights of Intregrated graduates, importance of medico social projects etc. <i class="fa fa-square" style={{color:"#FF812D",marginLeft:"3%",fontSize:"12px"}}></i></p></p>,
        <div dir="rtl">
          <ul style={{ listStyle: "square", color: "#ffdfc9" }} className="textFont4">

            <li>Get stronger with 100% enrollment of members</li>

            <li className="point2">Every member should enroll at least 2 new life members</li>

            <li className="point3">Every member should be a regular subscriber of JNIMA by paying at least Rs. 500/- for 5 years’
subscription</li>

            <li className="point4">Make NIMA Students Forums in all ISM Colleges stronger</li>

            <li className="point5">Hold one-day workshops at Taluka level educating every member and worker about the aims and
objects of NIMA, legal rights of Intregrated graduates, importance of medico social projects etc</li>

          </ul>
        </div>
        ,

       
<div dir="rtl">  
<ul style={{ listStyle: "square", color: "#ffdfc9" }} className="textFont5">

<li>Increasing personal contacts with the media and <br/> representative of people – <span style={{color:"#FF812D"}}> the MLA, MP etc. and <br/>
acquainting them with the importance of Intregrated <br/> Medicine </span> and the amendments needed in the
state and IMCC Act for proper protection of Intrgrated graduates</li>

<li className="point2">Writing regular articles in newspapers and <br/> periodicals on importance of Integrated medicine <br/> and
way to achieve it</li>

</ul>
        </div>
        ,
        <p>
          <p style={{ color: "#FF812D", fontSize: "45px" }}> Come Join Us,</p>
          <p style={{ fontSize: "26px", color: "#ffdfc9" }}>Fulfill the minimum <br /> programme as early as <br /> possible to make it stronger</p></p>,
        <p>
          <p> <span style={{ color: "#FF812D", fontSize: "35px" }}>To protect you <br />better</span> <span style={{ fontSize: "20px" }}>&amp; for better <br /> healthcare of common man in India.</span></p></p>
      ],
      currentText: 0,
      wheelCount: 0,
      scrollTop: 0,
    };

  }
  componentDidMount() {
    window.addEventListener("wheel", this.scrollText);
  }
  componentWillMount() {
    window.addEventListener("wheel", this.scrollText);
  }
  scrollText = (event) => {
    if (
      event.deltaY < 0 &&
      this.state.currentText < this.state.text.length - 1
    ) {
      if (this.state.wheelCount === 50) {
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
    } else if (event.deltaY > 0 && this.state.currentText > 0) {
      if (this.state.wheelCount === 50) {
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
    if (
      this.state.currentText < this.state.text.length - 1
    ) {
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

    }
  };
  shootdown = (event) => {
    event.preventDefault();

    if (
      this.state.currentText > 0
    ) {
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
    }

  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text">
            <p id="paragraphContent">{this.state.text[this.state.currentText]}</p>
          </div>

          <hr id="lineDivider" className={'objective-hr'}/>

        </div>
        <div className="row registerLink">
          <a
            className="link"
            href="#"
            style={{
              color: "white",
              // textAlign: "center!",
              textDecoration: "none",
              // marginRight: "0px",
              fontSize: "15px",
              // float: "right",

            }}
          >
            Register Yourself <img height="18px" src={Register} alt="" />
          </a>
        </div>
        <div className="MobileView">
          {/* <button onClick={this.shoot}> </button>
          <button onClick={this.shootdown}></button> */}
          <Fab size="small" color='black' onClick={this.shoot} aria-label="up" >
            <MdKeyboardArrowDown />
          </Fab>
          <Fab size="small" onClick={this.shootdown} aria-label="down" >
            <MdKeyboardArrowUp />
          </Fab>
        </div>

      </div>
    );
  }
}

export default Objective;

