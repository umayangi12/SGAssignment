import React, { Component } from "react";
import axios from "axios";

export default class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
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
    const { name, email, role } = this.state;

    const data = {
      name: name,
      email: email,
      role: role,
    };

    axios.put(`/user/update/${id}`, data).then((res) => {
      let path = "/UH";
      if (res.data.success) {
        alert("Details Updated Successfully");
        this.props.history.push(path);
        this.setState({
          name: "",
          email: "",
          role: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/user/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.post.name,
          email: res.data.post.email,
          role: res.data.post.role,
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
        <div className="" style={{ marginLeft: "16%" }}>
          <div className="card" style={{ width: "65rem" }}>
            <div class="card-body">
              <form>
                <br />
                <center>
                  <h1> Edit User Details</h1>
                </center>
                <br />
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>User Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="User Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>User Email</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="User Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div
                  className="form-group col-md-6"
                  style={{ marginBottom: "15px", marginLeft: "-1.5%" }}
                >
                  <lable style={{ marginBottom: "5px" }}>Province</lable>
                  <select
                    name="role"
                    onChange={this.handleInputChange}
                    value={this.state.role}
                    defaultValue="select type"
                    className="form-control"
                  >
                    <option defaultValue>Select User Category</option>
                    <option>Student</option>
                    <option>Supervisor</option>
                    <option>Panel Member</option>
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
      </div>
    );
  }
}
