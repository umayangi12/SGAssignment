import Axios from "axios";
import React, { Component } from "react";
import "./Allcss.css";
import swal from "@sweetalert/with-react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      fname: "",
      lname: "",
      email: "",
      dob: "",
      mobile: "",
      status: "",
      password: "",
      accType: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { uid, fname, lname, email, dob, mobile, status, password, accType } =
      this.state;
    const data = {
      uid: uid,
      fname: fname,
      lname: lname,
      email: email,
      dob: dob,
      mobile: mobile,
      status: status,
      password: password,
      accType: accType,
    };
    console.log(data);

    //email validation
    const uemail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //phone number validation
    const ph = /^[0-9\b]+$/;
    if (!ph.test(String(mobile)) || mobile.length != 10) {
      swal(
        "Invalid Contact Number !",
        "contact number should be valid pattern",
        "error"
      );
    } else if (!uemail.test(String(email))) {
      swal(
        "Invalid email address !",
        "Please enter valid email address",
        "error"
      );

      //empty field validation
    } else if (
      uid.length === 0 ||
      fname.length === 0 ||
      lname.length === 0 ||
      email.length === 0 ||
      dob.length === 0 ||
      mobile.length === 0 ||
      status.length === 0 ||
      password.length === 0 ||
      accType.length === 0
    ) {
      swal("Please fill all the details");
    } else {
      Axios.post("/cuser/save", data).then((res) => {
        let path = "/CU";
        if (res.data.success) {
          alert("User Saved Successfully");
          this.props.history.push(path);
          this.setState({
            uid: "",
            fname: "",
            lname: "",
            email: "",
            dob: "",
            mobile: "",
            status: "",
            password: "",
            accType: "",
          });
        }
      });
    }
  };
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg nav" style={{ marginTop: "5%" }}>
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <div>
                    <button className="btn btn-success">
                      <a
                        href="/HU"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Details
                      </a>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="card2" style={{ marginLeft: "15%" }}>
          <div className="card" style={{ width: "65rem" }}>
            <div class="card-body">
              <form>
                <br />
                <center>
                  <h1 className="anm">Create User</h1>
                </center>
                <br />
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>ID number</lable>
                  <input
                    type="number"
                    className="form-control"
                    name="uid"
                    placeholder="Enter ID"
                    value={this.state.uid}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>First Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    placeholder="Enter First name"
                    value={this.state.fname}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Last Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    placeholder="Enter Last name"
                    value={this.state.lname}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Email</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Date of Birth</lable>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    placeholder="Choose your DOB"
                    value={this.state.dob}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Mobile</lable>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    placeholder="Enter Mobile number"
                    value={this.state.mobile}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginBottom: "15px", marginLeft: "-1.5%" }}
                >
                  <lable style={{ marginBottom: "5px" }}>Status</lable>
                  <select
                    name="status"
                    onChange={this.handleInputChange}
                    value={this.state.Flanguage}
                    defaultValue="select type"
                    className="form-control"
                  >
                    <option defaultValue>Select Status</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Password</lable>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Add a temporary password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div
                  className="form-group col-md-6"
                  style={{ marginBottom: "15px", marginLeft: "-1.5%" }}
                >
                  <lable style={{ marginBottom: "5px" }}>Account Type</lable>
                  <select
                    name="accType"
                    onChange={this.handleInputChange}
                    value={this.state.Flanguage}
                    defaultValue="select type"
                    className="form-control"
                  >
                    <option defaultValue>Select Account Type</option>
                    <option>Admin</option>
                    <option>Student</option>
                  </select>
                </div>
              </form>
              <br></br>
              <center>
                <a
                  className="btn btn-warning btn-lg text-dark"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  <i className="far fa-check-square"></i>
                  &nbsp; Save
                </a>
              </center>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
