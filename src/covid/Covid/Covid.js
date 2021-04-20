import React from "react";
import "./Covid.css";
import pic from "../Images/Analytic 1.png";
import firstIllustration from "../Images/Fisrt illustration.svg";
import Table from "./Table";
import { MdMenu } from "react-icons/md";

class Covid extends React.Component {
  upload() {
    document.getElementById("selectImage").click();
  }
  render() {
    return (
      <div className="Covid__div">
        <div className="row Covid__buttonNav align-items-start">
          <MdMenu size={32} className="" />
        </div>
        <div className="row Covid__row align-items-center  mt-5">
          <div className="col-md-5 col-12">
            <h3 className="Covid__heading Covid__marginDesktop">Covid-19</h3>
            <div className="Covid__heading1 Covid__marginDesktop">
              News & Centers
            </div>
            <p className="Covid__marginDesktop Covid__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aut
            </p>
          </div>
          <div className="col-md-7 col-12">
            <img
              className="Covid__firstIllustration img-fluid"
              src={firstIllustration}
            ></img>
          </div>
          <div className="Covid__end ">Latest news (Branches)</div>
        </div>

        <div className="Covid__div2">
          <div
            className="row align-items-center"
            style={{ paddingTop: "50px" }}
          >
            <div className="col-md-5 col-12 Covid__col">
              <p className="Covid__heading3 Covid__marginDesktop">
                Recommendation
              </p>
              <p className="Covid__marginDesktop Covid__heading4">by NIMA CC</p>
              <p className="Covid__marginDesktop Covid__para2">
                Real-time training during global emergencies is critical for
                effective preparedness and response. The COVID-19 channel
                provides learning resources for health professionals,
                decision-makers and the public for the outbreak of coronavirus
                disease (COVID-19).
              </p>
              <p className="Covid__marginDesktop Covid__txt">
                Get Certificate for these Free Online Courses.
                <p />
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={pic}
                    alt="SecondIllustration"
                    className="Covid__secondillustration img-fluid"
                  ></img>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-outline-primary Covid__button"
                  >
                    Training for current outbreak
                  </button>
                </div>
              </div>
            </div>

            {/*<div className=" offset-md-1 col-md-6 Covid__CenterDiv">
              <img
                src={pic}
                alt="picture"
                className="Covid__secondillustration"
              ></img>
              <button
                type="button"
                className="btn btn-outline-primary Covid__button"
              >
                Training for current outbreak
              </button>
    </div>*/}
          </div>
          <div className="row">
            <div className="col-12">
              <p className="Covid__text">
                This is to inform you that there is a misprint in the nomination
                form send to you by me with the Notice of the 61st Annual
                Central
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "auto",
          }}
        >
          <Table />
        </div>
      </div>
    );
  }
}

export default Covid;
