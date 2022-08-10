import Axios from "axios";
import React, { Component } from "react";
import "./Allcss.css";
import swal from "@sweetalert/with-react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
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
    const { name, email, password } = this.state;
    const data = {
      name: name,
      email: email,
      password: password,
    };
    console.log(data);

    if (name.length === 0 || email.length === 0 || password.length === 0) {
      swal("Please fill all the details");
    } else {
      Axios.post("/cuser/save", data).then((res) => {
        let path = "/CU";
        if (res.data.success) {
          alert("User Saved Successfully");
          this.props.history.push(path);
          this.setState({
            name: "",
            email: "",
            password: "",
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
                        href="/dashboard"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Dashboad
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
                  <lable style={{ marginBottom: "5px" }}>Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Add Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Email</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Add an email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Password</lable>
                  <input
                    type="text"
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
