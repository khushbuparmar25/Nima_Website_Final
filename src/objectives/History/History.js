import React from "react";
import "./History.css";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
// import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown} from "react-icons/md";
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

class History extends React.Component {
  constructor() {
    super();
    this.state = {
      text: [
        <p style={{  fontSize: "42px" }}>
          National <br/> Integrated Medical
          <p style={{ color: "#e0a984" }}>Association</p>
        </p>,
        <p className="textFont" style={{color: "#ffdfc9"}}>
        The National Integrated Medical Association (NIMA) is an {" "}
        <span style={{ color: "#FF812D" }}>
        Indian Non-governmental organization established in 1948.{" "}
          </span>{" "}
          Integrated medical education was started nearly 75 years ago, and
          though the graduates coming out of these courses proved very
          successful practitioners ideal for the conditions of this country, the
          vested interests from both modern medical Ayurved. Ayurvedcamps,
          misguided the authorities and created various problems for integrated
          practitioners from the very beginning. Gradually the integrated
          medical community started organising itself to face the problems in an
          organised manner
          </p>,
        <p style={{ color: "#ffdfc9", fontSize: "42px" }}>
          All <br/> India <p style={{ color: "#f9b384" }}>Conference</p>{" "}
        </p>,
        <p style={{ fontSize:"13px" }}>
          The first major attempt was of the establishment of National Medical
          Association of India in 1947, which soon spread its activities in
          northern states of the country. From 1953 onwards other Associations
          of Integrated Practitioners were established in the states of Bombay,
          Mysore with the names as{" "}
          <span style={{ color: "orange" }}>
            Bombay State Integrated Medical Association
          </span>{" "}
          as{" "}
          <span style={{ color: "#FF812D" }}>
            Maharashtra State Integrated Medical Association &amp; Gujrat State
            Integrated Medical Association, Integrated Associations of Mysore,
            etc.
          </span>
          The attempt to bring all these associations together, materialised in
          1966 at 5th AIC of NIMA Conference under the Presidentship of Dr Panna
          Lal Varshney and at the 7th All India Conference of NIMA held at
          Bhopal on 1.2.1969 the Constitution of the National Integrated Medical
          Association was adopted and thus NIMA was born.
        </p>,
        <p>
        <p style={{ color: "#ffdfc9", fontSize: "70px"}}>
        {" "}
        1st 
        </p>
        <span style={{ color: "#e0a984",fontSize: "35px" }}>Meeting</span>
        </p>,
        <p  className="textFont" style={{ color: "#ffdfc9" }}>
          The first meeting of the NIMA Central Council was held at Delhi on
          6.4.1969 which elected Dr P.N.Awasthi (Bombay) as the president and
          Dr.K.S.Potdar (Delhi) as the General Secretary of NIMA.
        </p>,
        <p
          style={{
            color: "darkorange",
            fontSize: "44px",
            margin: "0px",
            padding: "0px",
          }}
        >
          Regi
          <span style={{ color: "#e0a984", margin: "0px", padding: "0px" }}>
            stration
          </span>
        </p>,
        <p  style={{
          color: "#ffdfc9",
        }}
         className="textFont">
        Today NIMA is the only all India organisation of the institutionally trained and qualified
practitioners of Indian Systems of Medicine, who have undergone the conjoint study of Ayurveda,
Unani, Siddha & modern medicine, for a period of at least four years after Inter Science or XIIth
std (10 + 2 years education). The Association has well organised branches in 17 states and in
union territories of Delhi & Chandigarh. 
        </p>,
        <p style={{fontSize:"44px"}}>
        <span style={{color:"orange"}}>
        Branch
        </span>es
        </p>,
        <p  style={{
          color: "#ffdfc9",
        }}
         className="textFont">
        Today NIMA is the only all India organisation of the institutionally trained and qualified
practitioners of Indian Systems of Medicine, who have undergone the conjoint study of Ayurveda,
Unani, Siddha & modern medicine, for a period of at least four years after Inter Science or XIIth
std (10 + 2 years education). The Association has well organised branches in 17 states and in
union territories of Delhi & Chandigarh. 
        </p>,
        <p>
        <span style={{ color: "#ffdfc9", fontSize:"100px",lineHeight:"0.5" }}>
        lll
        </span><br/>
        <span style={{ color: "#ffdfc9", fontSize:"30px" }}>
        Tier 
        </span> <br/>
        <span style={{ color: "#ffb482", fontSize:"30px" }}>        
        System of  </span> <span  style={{ color: "#ff812d", fontSize:"30px" }}>NIMA </span>
        </p>,
        <p style={{  color: "#ffdfc9",fontSize:"12px"}}>
        <p style={{ fontWeight:"bolder", color: "#ffdfc9",fontSize:"16px"}}>
        The Association has a three tier system in its working
        </p>
        Local/District Branch.<br/>
 State Branches/Territorial Branches.<br/>
 Central Council.
        </p>,
        <p style={{  color: "#ffdfc9",fontSize:"14px"}} className="textFont">
        Minimum 11 eligible integrated practitioners from any town/city/area can come together and
        function locally as per the Constitution of NIMA.
        <p>
        All Local/District Branches in a state form a State Branch of NIMA, which is governed by its state
        council. Local Branch Managing Committees send their representatives in proportion to the
        number of their members to the State Council. The State Council meets twice a year, elect its
        Office Bearers and carries out its duties for the entire State. The details regarding the working of
        the Local/District Branch and State Branches can be seen in the booklet of By-Laws of NIMA 
        </p>
        </p>,
        <p className="textFont" style={{  color: "#ffdfc9"}}>
        The Central Council is formed by the representatives coming from all the State Councils every
year. In proportion to their membership strength. The state Secretary is necessarily the first
representative of the State Branch on the Central Council. The Central Council is the important
body in which are vested the general control, management and direction of policy of the
Association. The central council in its annual meeting elects the Central Office bearers who form
the Executive Committee of NIMA which executes the programme laid down by the Central
Council.
        </p>,
        <p style={{  color: "#ffdfc9", fontSize:"40px"}}>
        Membership 
        </p>,
        <p style={{fontSize:"13px",  color: "#ffdfc9"}}>
        To bring financial stability and to have labour of workers on enrolments of annual members, the
Association has laid stress on enrolling maximim life members. The life membership subscription
is kept in long term fixed deposit in a Nationalised Bank and the annual interest accrued on it is
distributed. The Association has opened Associate Membership for non integrated qualified
practitioners who believe in integration. The Association year for Branches is from 1 October to
30 September
        </p>
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

  shoot =(event)=> {
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
  shootdown =(event)=>{
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

          <hr id="lineDivider" className={'history-hr'}/>
         
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
          Register Yourself <img height="18px" src={Register} alt=""/>
        </a>
        </div>
        <div className="MobileView">
          {/* <button onClick={this.shoot}> </button>
          <button onClick={this.shootdown}></button> */}
          <Fab size="small" color='black' onClick={this.shoot} aria-label="up" >
            <MdKeyboardArrowUp />
          </Fab>
          <Fab size="small" onClick={this.shootdown} aria-label="down" >
            <MdKeyboardArrowDown />
          </Fab>
        </div>
        
      </div>
    );
  }
}

export default History;

