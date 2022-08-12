import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    };
  }

  toggleIsShown = () => this.setState(({ isShown }) => ({ isShown: !isShown }));

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div>
          <center>
            <h1 className="backw1">Wellcome To Admin</h1>
          </center>
          <img className="backw" src="./admin.jpg" />
          <img className="backwo" src="./admin.jpg" />
          <button
            style={{ marginLeft: "90%", marginTop: "-14%" }}
            onClick={this.onLogoutClick}
            className="btn btn-lg btn-warning "
          >
            Logout
          </button>
          <nav class="navbar navbar-expand-lg nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <button className="btn btn-success">
                      <a
                        href="/CU"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Add Users
                      </a>{" "}
                    </button>
                  </li>
                  <li class="nav-item">
                    <button className="btn btn-success">
                      <a
                        href="/HU"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        All Details
                      </a>{" "}
                    </button>
                  </li>
                  <li class="nav-item">
                    <button className="btn btn-success">
                      <a
                        href="/sendmail"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Send Email
                      </a>{" "}
                    </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li class="nav-item "></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="mern">
            <div
              className="row"
              style={{ marginTop: "6%", marginBottom: "8%", marginLeft: "11%" }}
            >
              <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="./StuSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Create user</h5>
                    <p>Create new accounts for the necessary users</p>
                    <a href="/CU" class="btn btn-primary">
                      Click Here
                    </a>
                    &nbsp;
                  </div>
                </div>
              </div>

              <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="./allDetails.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">All Details</h5>
                    <p>View all the details of the users in the system</p>
                    <a href="/HU" class="btn btn-primary">
                      Click Here
                    </a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="./sendEmail.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Send Emails</h5>
                    <p>Send temporary email and password for the users</p>
                    <a href="/sendmail" class="btn btn-primary">
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

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
