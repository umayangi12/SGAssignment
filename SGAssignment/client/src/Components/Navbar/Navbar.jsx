import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("/movieTo").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.Fname.toLowerCase().includes(searchKey) ||
        post.Flanguage.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/movieTo").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg nav">
          <div class="container-fluid">
            <a class="navbar-brand navtext" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <a class="nav-link navtext1" href="/">
                    Home
                  </a>
                </li>
                &nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <a class="nav-link navtext1" href="#">
                    Support Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navtext1" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navtext1" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item a">
                <Link
                  className="nav-link btn btn-login button-outline-none"
                  to="/loginDash"
                >
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link btn btn-register button-outline-none"
                  to="/register"
                >
                  Signup
                </Link>
              </li>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
