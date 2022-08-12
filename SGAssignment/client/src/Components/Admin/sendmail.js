import React, { Component } from "react";

export default class sendmail extends Component {
  render() {
    return (
      <div>
        <div className="card2" style={{ marginLeft: "15%" }}>
          <div className="card" style={{ width: "65rem" }}>
            <div class="card-body">
              <form action="/send_email" method="post">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>From</lable>
                  <input
                    type="email"
                    className="form-control"
                    name="from"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>To</lable>
                  <input
                    type="email"
                    className="form-control"
                    name="to"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Subject</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Enter Subject"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Message</lable>
                  <textarea
                    id="w3review"
                    rows="4"
                    cols="50"
                    className="form-control"
                    name="message"
                    placeholder="Enter Message"
                  />
                </div>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
