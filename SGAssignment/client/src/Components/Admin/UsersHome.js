import React, { Component } from "react";
import axios from "axios";

export default class UserHome extends Component {
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
    axios.get("/user").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/user/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.name.toLowerCase().includes(searchKey) ||
        post.email.toLowerCase().includes(searchKey) ||
        post.role.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/user").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

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
          <h1>All User Details</h1>
        </center>
        <br />
        <br />
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="table-primary" scope="col">
                #
              </th>
              <th class="table-primary" scope="col">
                Name
              </th>
              <th class="table-primary" scope="col">
                Email
              </th>
              <th class="table-primary" scope="col">
                User Category
              </th>
              <th class="table-primary" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td> {posts.name}</td>
                <td>{posts.email}</td>
                <td> {posts.role}</td>
                <td>
                  <a
                    className="btn btn-warning text-dark"
                    href={`/UE/${posts._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp; &nbsp;
                  <a
                    className="btn btn-danger text-dark "
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginBottom: "10%" }}></div>
        <br />
      </div>
    );
  }
}
