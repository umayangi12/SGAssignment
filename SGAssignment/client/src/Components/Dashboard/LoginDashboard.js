import React, { Component } from "react";

class LoginDashboard extends Component {
  render() {
    return (
      <div className="logindash">
        <div
          className="row"
          style={{ marginTop: "6%", marginBottom: "8%", marginLeft: "15%" }}
        >
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="./AdminSign.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Admin</h5>
                <br />
                <br />
                <a href="/login" class="btn btn-primary">
                  Login
                </a>
                &nbsp;
                <a href="/register" class="btn btn-success">
                  SignUp
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="./StuSign.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Student</h5>
                <br />
                <br />
                <a href="/login1" class="btn btn-primary">
                  Login
                </a>
                &nbsp;
                <a href="/register1" class="btn btn-success">
                  SignUp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginDashboard;
