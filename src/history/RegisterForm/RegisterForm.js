import React, { Component } from "react";
import { Fragment } from "react";
import "./RegisterForm.css";
import { sendRegisterForm } from "./DataService";
export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      email: "",
      contactNo: "",
      alternateNo: "",
      city: "",
      state: "",
      pincode: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data["fname"] = this.state.firstName;
    data["lname"] = this.state.middleName;
    data["num1"] = this.state.contactNo;
    data["num2"] = this.state.alternateNo;
    data["email"] = this.state.email;
    data["city"] = this.state.city;
    data["state"] = this.state.state;
    data["pincode"] = this.state.pincode;

    console.log(data);
    sendRegisterForm(data)
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
    return (
      <div className="Register_MainDiv">
        <div className="row p-0 m-0">
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12 p-0">
            <form onSubmit={this.handleSubmit}>
              <div className="row p-0 m-0">
                <div className="form-group  col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control ContactForm_input "
                    // id="Form_input1"
                    placeholder="First Name"
                    required
                    value={this.state.firstName}
                    pattern="[A-Za-z_ ]{1,32}"
                    title="*ENTER CHARACTER VALUES ONLY"
                    name="firstName"
                    onChange={this.handleChange}
                    id="firstName"
                    style={{ color: "#390969" }}
                  />
                </div>
                <div className="form-group  col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control ContactForm_input "
                    // id="Form_input1"
                    placeholder="Middle Name"
                    required
                    pattern="[A-Za-z_ ]{1,32}"
                    title="*ENTER CHARACTER VALUES ONLY"
                    name="middleName"
                    value={this.state.middleName}
                    onChange={this.handleChange}
                    id="middleName"
                    style={{ color: "#390969" }}
                  />
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="form-group  col-md-6 col-12">
                  <input
                    id="contactNo"
                    pattern="[1-9]{1}[0-9]{9}"
                    title="Number should be of 10 digits only"
                    type="tel"
                    name="contactNo"
                    className="form-control ContactForm_input"
                    // id="Form_input2"
                    required
                    onChange={this.handleChange}
                    value={this.state.contactNo}
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="form-group  col-md-6 col-12">
                  <input
                    id="alternateNo"
                    pattern="[1-9]{1}[0-9]{9}"
                    title="Number should be of 10 digits only"
                    value={this.state.alternateNo}
                    type="tel"
                    name="alternateNo"
                    className="form-control ContactForm_input"
                    // id="Form_input2"
                    required
                    onChange={this.handleChange}
                    placeholder="Alternate Mobile Number"
                  />
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="form-group  col-md-6 col-12">
                  <input
                    type="email"
                    className="form-control ContactForm_input"
                    // id="Form_input2"
                    required
                    onChange={this.handleChange}
                    name="email"
                    id="email"
                    value={this.state.email}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="form-group  col-md-4 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={this.state.city}
                    name="city"
                    onChange={this.handleChange}
                    required
                    placeholder="City"
                  />
                </div>
                <div className="form-group  col-md-4 col-12">
                  <input
                    type="text"
                    value={this.state.state}
                    className="form-control"
                    id="state"
                    name="state"
                    onChange={this.handleChange}
                    required
                    placeholder="State"
                  />
                </div>
                <div className="form-group  col-md-4 col-12">
                  <input
                    type="number"
                    className="form-control"
                    id="pincode"
                    value={this.state.pincode}
                    name="pincode"
                    onChange={this.handleChange}
                    required
                    placeholder="Pinode"
                  />
                </div>
              </div>
              <div className="row p-0 m-0 ">
                <div className="col-12 d-flex justify-content-center">
                  <button className="btn btn-dark"> Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
