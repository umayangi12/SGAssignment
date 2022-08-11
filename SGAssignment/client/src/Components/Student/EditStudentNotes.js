import React, { Component } from "react";
import axios from "axios";

export default class EditStudentNotes extends Component {
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
    const id = this.props.match.params.id;
    const { title, description } = this.state;

    const data = {
      title: title,
      description: description,
    };

    axios.put(`/stdnotes/update/${id}`, data).then((res) => {
      let path = "/HSN";
      if (res.data.success) {
        alert("Note Updated Successfully");
        this.props.history.push(path);
        this.setState({
          title: "",
          description: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/stdnotes/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          title: res.data.post.title,
          description: res.data.post.description,
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
                  <h1 className="anm"> Edit My Notes</h1>
                </center>
                <br />
                <br />

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Title</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter a Title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>description</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Enter a description"
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
