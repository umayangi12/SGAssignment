import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="hbody">

          <div class="gfg">
            <img src="https://p0.pikist.com/photos/696/693/laptop-computer-browser-research-study-school-business-work-black-and-white-dark.jpg" width="1000" height="400" class="imgstyle"></img>
            <h3 class="first-txt">
              Notices
            </h3>

            <div class='row'>
              <h2 class="second-txt">
                Faculty of Computing
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                School of Business
                <br /><br />

                Faculty of Engineering
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                International Program
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                Faculty of Humanities and Sciences
              </h2>
            </div>
          </div>
          <div className='row'>
            <div class="card bg-light mb-3" style={{ width: '50%', marginTop:'3%', marginLeft:'5%' }} >
              <h5 class="card-header ch-color">Latest Announcements!</h5>
              <div class="card-body">
                <p class="card-text">Academic Delivery During Curfew Period</p>
                <p class="card-text">Conduting On-Campus Examinations</p>
                <p class="card-text">Research Report Submission</p>
              </div>
            </div>

          </div>
          <div class='col'>
            <div class="hcard card bg-light mb-3">
              <div class="hcontainer">
                <i class='fas'><h4><b>&#xf06a; Support Service</b></h4></i>
                <h5><b> Student Support</b></h5>
                <p><a href="https://support.sliit.lk/">https://support.lk</a></p>
                <i class='fas'><h5><b>&#xf095; Hotline</b></h5></i>
                <p>011 23468543</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <div class='col'>
            <div class="hcard2 card bg-light mb-3">
              <div class="hcontainer2">
                <i class='fas'><h4><b>&#xf044; Quick Links</b></h4></i>
                <p> <a href="/CSG">Create Student Group </a></p>
                <p> <a href="/CSR">Supervisor Request</a></p>
                <p> <a href="/RCS">Request Co-Supervisor </a></p>
                <p> <a href="/CTR">Register Topic </a></p>
                <p> <a href="/SC">See Status </a></p>
                <p> <a href="/download"> Downlaod Template </a></p>


              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div class='col'>
            <div class="hcard3 card bg-light mb-3">
              <div class="hcontainer3">
                <i class='fas'><h4><b>&#xf15c;  Help Desk</b></h4></i>
                <button class="btnbtn"><span>Provide Feedback</span></button>
                <br />
                <br />
                <button class="btnbtn"><span>Service Guide</span></button>
                <br />
              </div>
            </div>
          </div>
          <br /><br />


          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
    )
  }
}