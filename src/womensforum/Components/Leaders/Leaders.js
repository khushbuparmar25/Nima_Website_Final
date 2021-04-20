import React from "react";
import "./Leaders.css";
import temp from "./temp.PNG";
import women1 from "./women1.png";
import women2 from "./women2.png";
import women3 from "./women3.png";
function Leaders() {
  return (
    <div className="leaders-component" id="shift-left">
      
     
      {/*FIRST ROW*/}
      <div className="Leader__main">
        <div className="Leader__mainrow row">
          <div className="col-lg-7 col-sm-12 col-12">
            <img
              className="Leader__image1"
              src={women2}
              alt="Leader"
            />
            <div className="Leader__first">
              <div className="Leader__second">DR. MRS. SADHANA KULKARNI</div>
              <div className="Leader__details">
                President
                Women's Forum
                NIMA, Akola, India
                <div className="Leader__phone"><svg className="Leader__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>+911234567890</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-m-12 col-12">
            <div className="Leader__subheading">Message from the leader</div>
            <br/>
            <p id="Leader__justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non prodient, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillim dolore
            </p>
            <a className="Leader__link" href="/">
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>

      
      {/*SECOND ROW*/}
      <div className="Leader__middlediv">
        <div className="Leader__mainrow row">
          <div className="col-lg-7 col-sm-12 col-12 order-lg-10 order-1">
            <div className="Leader__fourth">
              <div className="Leader__rightsecond">DR. MRS. SADHANA KULKARNI</div>
              <div className="Leader__rightdetails">
                President
                Women's Forum
                NIMA, Akola, India
                <div className="Leader__rightphone"><svg className="Leader__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>+911234567890</div>
              </div>
            </div>
            <img
              className="Leader__image2"
              src={women1}
              alt="Leader"
            />
          </div>
          <div className="col-lg-5 col-sm-12 col-12 order-2">
            <div className="Leader__rightsubheading">Message from the leader</div><br/>
            <p className="Leader__third" id="Leader__rightjustify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non prodient, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillim dolore
            </p>
            <a className="Leader__rightlink" href="/">
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>

      {/*THIRD ROW*/}
      <div className="Leader__main">
        <div className="Leader__mainrow row">
          <div className="col-lg-7 col-sm-12 col-12">
            <img
              className="Leader__image1"
              src={women3}
              alt="Leader"
            />
            <div className="Leader__first">
              <div className="Leader__second">DR. MRS. SADHANA KULKARNI</div>
              <div className="Leader__details">
                President
                Women's Forum
                NIMA, Akola, India
                <div className="Leader__phone"><svg className="Leader__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>+911234567890</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-m-12 col-12">
            <div className="Leader__subheading">Message from the leader</div><br/>
            <p id="Leader__justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non prodient, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillim dolore
            </p>
            <a className="Leader__link" href="/">
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Leaders;
