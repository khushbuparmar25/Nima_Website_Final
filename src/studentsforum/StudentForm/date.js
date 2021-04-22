import React from "react";
import "./StudentForm.css";
import student from "../Images/Ellipse 213.svg";
import arrow from "../Images/arrow.svg";
import page2 from "../Images/page2.png";
import page1 from "../Images/page1.png";
import { sendStudentForm } from "../DataService/StudentForm";
import Recaptcha from "react-google-invisible-recaptcha";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDiv: true,
      secondDiv: false,
      bgColor1: "#29517C",
      bgColor2: "white",
      color1: "#FFFFFF",
      color2: "#29517C",
      borderColor1: "#29517C",
      borderColor2: "transparent",
      messageSent: false,
      firstName: "",
      middleName: "",
      lastName: "",
      address: "",
      DateOfBirth: "",
      bloodGroup: "",
      gender: "",
      contactNo: "",
      alternateNo: "",
      email: "",
      collegeName: "",
      yearOfPassing: "",
      memberType: "",
      selectYear: "2021",
      selectMonth: "January",
    };
    this.range = this.range.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
    this.handleRegDateChange = this.handleRegDateChange.bind(this);
  }
  handleDobChange(d) {
    this.setState({ dateOfBirth: d });
  }
  range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  }
  handleRegDateChange(d) {
    this.setState({ dateOfRegistration: d });
    // this.handleTitlePaper = this.handleTitlePaper.bind(this);
  }
  onResolved = () => {
    this.setState({ messageSent: true });
    console.log(this.state);
  };
  handleClickNext = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: false,
      secondDiv: true,
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: true,
      secondDiv: false,
    });
  };

  changeColor1 = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: true,
      secondDiv: false,
      bgColor1: "#29517C",
      bgColor2: "#FFFFFF",
      color1: "#FFFFFF",
      color2: "#29517C",
      borderColor1: "#29517C",
      borderColor2: "#29517C",
    });
  };
  changeColor2 = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: false,
      secondDiv: true,
      bgColor1: "#FFFFFF",
      bgColor2: "#29517C",
      color1: "blue",
      color2: "white",
      borderColor1: "#29517C",
      borderColor2: "#29517C",
      firstName: "",
    });
  };
  handleChange = (event) => {
    event.preventDefault();
    // let key = event.target.name;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    // this.recaptcha.execute();

    const data = new FormData();
    data["firstName"] = this.state.firstName;
    data["lastName"] = this.state.lastName;
    data["middleName"] = this.state.middleName;
    data["address"] = this.state.address;
    data["DateOfBirth"] = this.state.DateOfBirth;
    data["bloodGroup"] = this.state.bloodGroup;
    data["contactNo"] = this.state.contactNo;
    data["alternateNo"] = this.state.alternateNo;
    data["gender"] = this.state.gender;
    data["email"] = this.state.email;
    data["collegeName"] = this.state.collegeName;
    data["yearOfPassing"] = this.state.yearOfPassing;
    data["memberType"] = this.state.memberType;

    console.log(data);
    sendStudentForm(data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Success " + response.data.message);
          // window.location.reload();
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  render() {
    var d = new Date();
    const years = this.range(1940, 2021);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      <div className="Student form_main">
        {
          this.state.firstDiv && (
            <div className="Student_first">
              <div className="row Student-row">
                <div className="mobile">
                  <img src={student} className="Student_img"></img>
                  <div className="Student_head_mob">Come Join Us</div>
                  <div className="Student_head2_mob">In Just 2 easy steps</div>
                </div>

                <div className="Student_pic col-md-6 d-flex align-items-center">
                  <img src={student} className="Student_img"></img>
                </div>
                <div className="col-md-6 p-0 no-gutters">
                  <div className="Student_head1" id="desktop">
                    Come Join Us
                  </div>
                  <div className="Student_head2" id="desktop">
                    In Just 2 easy steps
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-row row1 ">
                      <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                        <input
                          type="text"
                          className="form-control Student_input"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          required
                          onChange={this.handleChange}
                          pattern="[A-Za-z_ ]{1,32}"
                          title="*ENTER CHARACTER VALUES ONLY"
                        />
                      </div>
                      <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                        <input
                          type="text"
                          className="form-control Student_input"
                          id="middleName"
                          name="middleName"
                          placeholder="Middle Name"
                          required
                          onChange={this.handleChange}
                          pattern="[A-Za-z_ ]{1,32}"
                          title="*ENTER CHARACTER VALUES ONLY"
                        />
                      </div>
                      <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                        <input
                          type="text"
                          className="form-control Student_input"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          required
                          onChange={this.handleChange}
                          pattern="[A-Za-z_ ]{1,32}"
                          title="*ENTER CHARACTER VALUES ONLY"
                        />
                      </div>
                    </div>
                    <div className="form-row row2">
                      <textarea
                        className="Student_add StudentMobile_mp"
                        name="address"
                        onChange={this.handleChange}
                        id="address"
                        placeholder="Address"
                        required
                      ></textarea>
                    </div>
                    <div className="form-row row1 ">
                      <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                        <DatePicker
                          // calendarClassName="col-md-4 col-12"
                          // className="col-md-4 col-12"
                          renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                          }) => (
                            <div
                              style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <button
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                              >
                                {"<"}
                              </button>
                              <select
                                value={this.state.selectYear}
                                onChange={({ target: { value } }) => {
                                  changeYear(value);
                                  this.setState({ selectYear: value });
                                }}
                              >
                                {years.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>

                              <select
                                value={this.state.selectMonth}
                                onChange={({ target: { value } }) => {
                                  changeMonth(months.indexOf(value));
                                  this.setState({ selectMonth: value });
                                }}
                              >
                                {months.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>

                              <button
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                              >
                                {">"}
                              </button>
                            </div>
                          )}
                          selected={this.state.dateOfBirth}
                          onChange={this.handleDobChange}
                          className="personalDOB col-12"
                          placeholderText="Date of Birth"
                        ></DatePicker>
                        {/*   <input
                        type="date"
                        class="Student_input form-control col "
                        id="DateOfBirth"
                        name="DateOfBirth"
                        onChange={this.handleChange}
                        placeholder="Date of Birth"
                        required
                      /> */}
                      </div>
                      <div className="col-md-4 col-12 no-gutters">
                        <select
                          className="Student_input form-control StudentMobile_mp"
                          id="bloodGroup"
                          required
                          name="bloodGroup"
                          onChange={this.handleChange}
                          placeholder="Blood Group"
                        >
                          <option value="" disabled selected>
                            Blood Group
                          </option>
                          <option value="A+">A+</option>
                          <option value="B-">B+</option>
                          <option value="O-">O+</option>
                          <option value="A-">A-</option>
                          <option value="B-">B-</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                        <select
                          className="form-control Student_input"
                          id="gender"
                          required
                          name="gender"
                          onChange={this.handleChange}
                        >
                          <option disabled value="" selected>
                            Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row row1">
                      <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                        <input
                          className="form-control Student_input"
                          id="contactNo"
                          name="contactNo"
                          required
                          placeholder="Mobile Number 1"
                          pattern="[1-9]{1}[0-9]{9}"
                          title="Number should be of 10 digits only"
                          type="tel"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                        <input
                          className="form-control Student_input"
                          id="alternateNo"
                          name="alternateNo"
                          pattern="[1-9]{1}[0-9]{9}"
                          title="Number should be of 10 digits only"
                          type="tel"
                          required
                          onChange={this.handleChange}
                          placeholder="Mobile Number 2"
                        />
                      </div>
                      <div class="col"></div>
                    </div>
                    <div className="form-row row3 StudentMobile_mp">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        required
                        className="form-control col-12 col-md-8 no-gutters Student_input"
                        placeholder="Email-id"
                      />
                      {/* <input type="name" class="form-control col" id="Student_input" placeholder="Mobile Number 2"/>
                                <div  class="col" ></div> */}
                    </div>

                    <div>
                      <button
                        type="submit"
                        // onClick={this.handleSubmit}
                        className="Student_next StudentMobile_mp"
                        // onClick={this.handleClickNext}
                      >
                        NEXT
                      </button>
                    </div>
                    <div className="row form-row d-flex justify-content-end">
                      <img src={page1} className="Student_page1"></img>
                    </div>
                    {/* <div>
                                    <button className="Student_page" onClick={this.changeColor1} style={{backgroundColor: this.state.bgColor1,color:this.state.color1,borderColor:this.state.borderColor1}}>1</button>
                                    <button className="Student_page" onClick={this.changeColor2} style={{backgroundColor: this.state.bgColor2,color:this.state.color2,borderColor:this.state.borderColor2}} >2</button>
                                    </div> */}
                    {/* <div className="page">
                                    <Pagination count={2} color="primary" onClick={this.changePage} />
                                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          )
          //    </div>
        }
        {this.state.secondDiv && (
          <div className="">
            <div className="row p-0 m-0 SFSecound_row">
              <div className="mobile">
                <img src={student} className="Student_img"></img>
                <div className="Student_head_mob">Come Join Us</div>
                <div className="Student_head2_mob">You are so Close</div>
              </div>
              <div className="Student_pic col-md-6 align-middle">
                <img src={student} className="Student_img"></img>
              </div>
              <div className="col-md-6 no-gutters" style={{ padding: "0px" }}>
                <div className="Student_head1" id="desktop">
                  Come Join Us
                </div>
                <div className="Student_head2" id="desktop">
                  You are so close
                </div>
                <div className="form-row row1 StudentMobile_mp">
                  <input
                    type="text"
                    className="form-control col-12 Student_input"
                    id="collegeName"
                    name="collegeName"
                    placeholder="College Name"
                  />
                </div>
                <div className="form-row row1">
                  <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                    <select
                      className="form-control Student_input"
                      id="yearOfPassing"
                      name="yearOfPassing"
                    >
                      <option disabled value="" selected>
                        Year of Passing
                      </option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-12 no-gutters StudentMobile_mp">
                    <input
                      type="text"
                      className="form-control Student_input"
                      id="memberType"
                      onChange={this.handleChange}
                      placeholder="Member Type"
                      name="memberType"
                    />
                  </div>
                </div>

                {/*  <div className="form-row row4 align-items-end">
                  <div className="border-capcha">
                    <div className="Student_cap">Capcha</div>
                    <div className="col Student_capcha">RTX3090</div>
                  </div>
                  <input
                    className="form-control col capcha  "
                    placeholder="Enter Capcha"
                  />
                  <div className="col"></div>
                </div> */}
                <Recaptcha
                  ref={(ref) => (this.recaptcha = ref)}
                  sitekey="6Lfj_U0aAAAAAKu_W5IjQrRS2BHjRypOQCUT74qU"
                  onResolved={this.onResolved}
                />
                <div className="row5 form-row row align-items-center">
                  <div className="col-md-3 col-2 Student_BackBtn">
                    <a onClick={this.handleClick} className="">
                      <span>
                        <img src={arrow}></img>{" "}
                      </span>
                      Back
                    </a>
                  </div>
                  <div className="col-md-8 col-9">
                    <button
                      type="submit"
                      onClick={this.handleSubmit}
                      className="Student_submit"
                    >
                      {" "}
                      Submit
                    </button>
                  </div>
                </div>
                <div className="row form-row d-flex justify-content-end">
                  <img src={page2} className="Student_page2"></img>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
