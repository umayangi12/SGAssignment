import React, { Component } from "react";
import axios from "axios";

export default class EditThesisEvaluation extends Component {
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
    const id = this.props.match.params.id;
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

    axios.put(`/cuser/update/${id}`, data).then((res) => {
      let path = "/HU";
      if (res.data.success) {
        alert("Data Updated Successfully");
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
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/cuser/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          uid: res.data.post.uid,
          fname: res.data.post.fname,
          lname: res.data.post.lname,
          email: res.data.post.email,
          dob: res.data.post.dob,
          mobile: res.data.post.mobile,
          status: res.data.post.status,
          password: res.data.post.password,
          accType: res.data.post.accType
        });
        console.log(this.state.post);
      }
    });
  }

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
                        href="/dashboard"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Dashboad
                      </a>{" "}
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <center>
          <h1>Update User</h1>
        </center>

        <br />
        <div class="card" style={{ width: "50rem", marginLeft: "22%" }}>
          <div class="card-body">
            <form>
              <br />
              <br />
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
                &nbsp; Update
              </a>
            </center>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
