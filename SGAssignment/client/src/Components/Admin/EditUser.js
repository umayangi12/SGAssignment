import React, { Component } from "react";
import axios from "axios";

export default class EditUser extends Component {
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

    // console.log(data)

    // const SenderContact = /^[0-9\b]+$/;
    // const ReceiverContact = /^[0-9\b]+$/;
    // const ReceiverEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const SenderEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if ((!SenderContact.test(String(senderContact))) || (senderContact.length != 10)) {
    //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
    // } else if ((!ReceiverContact.test(String(receiverContact))) || (receiverContact.length != 10)) {
    //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
    // } else if ((!ReceiverEmail.test(String(receiverEmail)))) {
    //     swal("Invalid email address !", "Please enter valid email address", "error");
    // } else if ((!SenderEmail.test(String(senderEmail)))) {
    //     swal("Invalid email address !", "Please enter valid email address", "error");
    // } else if (serialNumber.length === 0 || receiverName.length === 0 || receiverContact.length === 0 ||
    //     receiverEmail.length === 0 || receiverAddress.length === 0 || senderName.length === 0 || senderContact.length === 0 ||
    //     senderEmail.length === 0 || senderAddress.length === 0 || pNo.length === 0 || pType.length === 0 || pWeight.length === 0 || pShippingCost.length === 0) {
    //     swal("Please fill all the details")
    // }else {

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
          lname: res.data.post.lanme,
          email: res.data.post.email,
          dob: res.data.post.dob,
          mobile: res.data.post.mobile,
          status: res.data.post.status,
          password: res.data.post.password,
          accType: res.data.post.accType,
        });
        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div>
        <nav class="navbar b">
          <div class="container">
            <form class="d-flex nav1 " role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleSearchArea}
              ></input>
              &nbsp;
              <button class="btn btn-outline-warning " type="submit">
                Search
              </button>
            </form>
            <a class="navbar-brand" href="#"></a>
          </div>
        </nav>
        <div className="card2">
          <div className="card" style={{ width: "65rem" }}>
            <div class="card-body">
              <form>
                <br />
                <center>
                  <h1 className="anm"> Edit Users</h1>
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

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Status</lable>
                  <input
                    type="boolean"
                    className="form-control"
                    name="status"
                    placeholder="Enter Status"
                    value={this.state.status}
                    onChange={this.handleInputChange}
                  />
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
      </div>
    );
  }
}
