import React, { Fragment } from "react";
import "./Table.css";
import { doctorDetails } from "./DoctorDetails";
import Modalclass from "./Modalclass";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorDetails: doctorDetails,
      selectedDoctorDetails: [],
      open: false,
      modal: "-1",
    };
  }
  showModal = (e) => {
    // e.preventDefault();
    console.log(e);
    // console.log(e.target.id);
    let index = e;
    this.setState({
      modal: index,
    });
    // setTimeout(() => {
    //   console.log("state", this.state.modal);
    // }, 2000);
  };
  closeModal = () => {
    this.setState({
      modal: "-1",
    });
  };
  componentDidMount() {
    this.setState({ doctorDetails: doctorDetails });
    this.setState({ selectedDoctorDetails: doctorDetails });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  filterPlace = () => {
    let distinctPlace = [];
    this.state.doctorDetails.map((obj) => distinctPlace.push(obj.state));
    distinctPlace = [...new Set(distinctPlace)];
    return distinctPlace;
  };

  handleChangePlace = (event) => {
    let state = event.target.value;
    const temp = this.state.doctorDetails.filter((o) => {
      if (o.state === state) {
        return o;
      }
      return 0;
    });
    this.setState({
      selectedDoctorDetails: temp,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="Table__Container">
          <div className="Table__header">
            <div className="row">
              <div className="col-md-6 col-sm-12 Table__headerCol">
                <div className="row Table__records">
                  <div className="col-6 Table__totalRecords">
                    <p className="Table__totalRecordsText">Total Records</p>
                  </div>
                  <div className="col-6 Table__recordCount">
                    <p className="Table__recordCountText">424/ 10 states</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 Table_headerCol">
                <select
                  className="Table__states"
                  onChange={this.handleChangePlace}
                  id="state"
                >
                  <option value="" disabled selected>
                    Select State
                  </option>
                  {/* <optgroup label="Maharashtra">
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Nagpur">Nagpur</option>
                  </optgroup>
                  <optgroup label="Gujarat">
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="Ahmedabad">Ahmedabad</option>
    </optgroup>*/}
                  {this.filterPlace().map((state, index) => (
                    <option value={state} key={index}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="Table__tableContainer">
            <table className="Table__table">
              <tbody>
                <tr className="Table__tableHeadingRow">
                  <th className="Table__tableComponents"></th>
                  <th className="Table__tableComponents">State</th>
                  <th className="Table__tableComponents">District</th>
                  <th className="Table__tableComponents">Place</th>
                  <th className="Table__tableComponents">Doctor name</th>
                  <th className="Table__tableComponents">Contact</th>
                  <th className="Table__tableComponents"></th>
                </tr>
                {this.state.selectedDoctorDetails.map((doctor, index) => (
                  <tr className="Table__tableDataRow" key={index}>
                    {index % 2 === 0 ? (
                      <td
                        className="Table__tableComponents Table__srNo"
                        style={{ color: "#1b3686", fontSize: "30px" }}
                      >
                        {index + 1}
                      </td>
                    ) : (
                      <td
                        className="Table__tableComponents Table__srNo"
                        style={{ color: "#01677d", fontSize: "30px" }}
                      >
                        {index + 1}
                      </td>
                    )}
                    <td className="Table__tableComponents">{doctor.state}</td>
                    <td className="Table__tableComponents">
                      {doctor.district}
                    </td>
                    <td className="Table__tableComponents">{doctor.place}</td>
                    <td className="Table__tableComponents">{doctor.name}</td>
                    <td className="Table__tableComponents">{doctor.contact}</td>
                    <td className="Table__tableComponents">
                      {index % 2 === 0 ? (
                        <button
                          className="Table__button"
                          style={{ border: "2px solid #1B3686" }}
                        >
                          <a
                            className="Table__a"
                            // href="#"
                            onClick={() => this.showModal(index)}
                          >
                            Read More
                          </a>
                        </button>
                      ) : (
                        <button
                          className="Table__button"
                          style={{ border: "2px solid #01677D" }}
                        >
                          <a
                            className="Table__a"
                            // href="#"
                            onClick={() => this.showModal(index)}
                          >
                            Read More
                          </a>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="Table__cards">
            {this.state.selectedDoctorDetails.map((doctor, index) => (
              <div className="Table__cardContainer" key={index}>
                <p className="Table__cardNumber" style={{ marginBottom: "0" }}>
                  {index + 1}
                </p>
                <div className="Table__cardTable">
                  <div className="row Table__cardRow">
                    <div className="col-6">State</div>
                    <div
                      className="col-6"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {doctor.state}
                    </div>
                  </div>
                  <div className="row Table__cardRow">
                    <div className="col-6">District</div>
                    <div
                      className="col-6"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {doctor.district}
                    </div>
                  </div>
                  <div className="row Table__cardRow">
                    <div className="col-6">Place</div>
                    <div
                      className="col-6"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {doctor.place}
                    </div>
                  </div>
                  <div className="row Table__cardRow">
                    <div className="col-6">Doctor name</div>
                    <div
                      className="col-6"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {doctor.name}
                    </div>
                  </div>
                  <div className="row Table__cardRow">
                    <div className="col-6">Contact</div>
                    <div
                      className="col-6"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {doctor.contact}
                    </div>
                  </div>
                  <div className="row Table__cardRow Table__btnDiv">
                    {/*  <div className="Table__aContainer">
                    <a className="Table__a" href="#">
                      Read More
                    </a>
          </div> */}
                    {index % 2 === 0 ? (
                      <button
                        className="Table__button"
                        style={{ border: "2px solid #1B3686" }}
                      >
                        <a
                          className="Table__a" // href="#"
                          onClick={() => this.showModal(index)}
                        >
                          Read More
                        </a>
                      </button>
                    ) : (
                      <button
                        className="Table__button"
                        style={{ border: "2px solid #01677D" }}
                      >
                        <a
                          className="Table__a" // href="#"
                          onClick={() => this.showModal(index)}
                        >
                          Read More
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer_upcloud row">
            {/* <p>Powered by Upcloud Technology Pvt Ltd</p> */}
          </div>
        </div>
        {this.state.modal === "-1" ? (
          <div></div>
        ) : (
          // console.log(this.state.modal)
          <Modalclass
            data={this.state.selectedDoctorDetails[this.state.modal].details}
            closeModal={this.closeModal}
            open={true}
          />
        )}
      </div>
    );
  }
}

export default Table;
