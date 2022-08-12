import Axios from "axios";
import React, { Component } from "react";
import "./Allcss.css";
import swal from "@sweetalert/with-react";

export default class StudentNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
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
    const { title, description } = this.state;
    const data = {
      title: title,
      description: description,
    };
    console.log(data);

    if (title.length === 0 || description.length === 0) {
      swal("Please fill all the details");
    } else {
      Axios.post("/stdnotes/save", data).then((res) => {
        let path = "/CSN";
        if (res.data.success) {
          alert("Note saved Successfully");
          this.props.history.push(path);
          this.setState({
            title: "",
            description: "",
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
                        href="/HSN"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Details
                      </a>{" "}
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
                  <h1 className="anm">My Notes List</h1>
                </center>
                <br />
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Title</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Add Title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Description</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Add a description"
                    value={this.state.description}
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
