import React, { Component } from "react";
import axios from "axios";

export default class HomeUser extends Component {
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
    axios.get("/cuser").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/cuser/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

  // Search user by name, email or id
  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.uid.toLowerCase().includes(searchKey) ||
        post.fname.toLowerCase().includes(searchKey) ||
        post.lname.toLowerCase().includes(searchKey) ||
        post.email.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/cuser").then((res) => {
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
            <br />
            <br />
            <br />
            <a class="navbar-brand" href="#"></a>
          </div>
        </nav>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
              <th scope="col">Mobile</th>
              <th scope="col">Status</th>
              <th scope="col">Password</th>
              <th scope="col">AccType</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td> {posts.uid}</td>
                <td>{posts.fname}</td>
                <td>{posts.lname}</td>
                <td>{posts.email}</td>
                <td>{posts.dob}</td>
                <td>{posts.mobile}</td>
                <td>{posts.status}</td>
                <td>{posts.password}</td>
                <td>{posts.accType}</td>
                <td>
                  <a
                    className="btn btn-warning text-dark"
                    href={`/EU/${posts._id}`}
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
        <center>
          <button className="btn btn-success">
            <a href="/CU" style={{ textDecoration: "none", color: "white" }}>
              Add Users{" "}
            </a>{" "}
          </button>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
