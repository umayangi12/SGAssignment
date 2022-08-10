import React, { Component } from "react";
import axios from "axios";
import "./Allcss.css";

export default class StudentNotesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/stdnotes/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    const { title, description } = this.state.post;
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

        <h3 className="title">
          <span className="badge bg-light text-dark">{title}</span>
        </h3>
        <h3 className="description">
          <span className="badge bg-light text-dark">{description}</span>
        </h3>

        <br />
        <br />
      </div>
    );
  }
}
