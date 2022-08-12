import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "./Dashboard.css";

class Dashboard1 extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div>
          <button
            style={{ marginLeft: "90%", marginTop: "2.5%" }}
            onClick={this.onLogoutClick}
            className="btn btn-lg btn-warning "
          >
            Logout
          </button>
          <center>
            <h1 className="backw12">Student Dashboard</h1>
          </center>
          <img className="backw2" src="./student.jpg" />
          <img className="backwo2" src="./student.jpg" />
          <nav class="navbar navbar-expand-lg  hn311 nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <button className="btn btn-success">
                      <a
                        href="/CSN"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Add Student Notes
                      </a>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="mern">
            <div
              className="row"
              style={{ marginTop: "6%", marginBottom: "2%", marginLeft: "37%" }}
            >
              <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="./notes.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Student notes</h5>
                    <p>
                      Add notes and summerize your work for pass the exams with
                      better grades
                    </p>
                    <a href="/CSN" class="btn btn-primary">
                      Click Here
                    </a>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard1.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard1);
