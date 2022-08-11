import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard1 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (

      <div className=''>
        <div>
        <button style={{marginLeft:'90%', marginTop:'2.5%'}}
            onClick={this.onLogoutClick}
            className="btn btn-lg btn-warning "
          >
            Logout
          </button>
          <center>
            <h1 className='backw12'>Student Dashboard</h1>
          </center>
          <img className='backw2' src='./system.jpg' />
          <img className='backwo2' src='./system.jpg' />
          <nav class="navbar navbar-expand-lg  hn311 nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <button className="btn btn-success"><a href="/CSN" style={{ textDecoration: 'none', color: 'white' }}>Add Student Notes</a> </button>
                  </li>
                  <li class="nav-item">
                    <button className="btn btn-success"><a href="/HU" style={{ textDecoration: 'none', color: 'white' }}>See my Temporary password and email</a> </button>
                  </li>

                </ul>
              </div>
            </div>
          </nav>

         <div className='mern1'>
      <div className='row' style={{marginLeft:'40%', marginTop:'3%'}}>
    <div class="card" style={{width:'20rem'}} >
  <div class="card-body">
  <i class='fas'><h4><b>&#xf044; Quick Links</b></h4></i>
  <br/><br/>
    <p> <a href="/CSN">Add Student Notes </a></p>

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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard1);
