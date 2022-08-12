import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="hbody">
          <div class="gfg">
            <div class="row">
              <div class="hcontainer3">
                <i class="fas">
                  <br />
                  <br /> <br />
                </i>
                <br />
                <center>
                  <div className="centerText">
                    <h1>UNIVERSITY MANAGEMENT SYSTEM</h1>
                  </div>
                  <button className="btnbtn">
                    <span>
                      <a
                        href="/login"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Admin Login
                      </a>
                    </span>
                  </button>
                  <br />
                  <br />
                  <button className="btnbtn">
                    <span>
                      <a
                        href="/login1"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Student Login
                      </a>
                    </span>
                  </button>
                </center>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
