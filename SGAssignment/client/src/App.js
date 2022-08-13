import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import UserHome from "./Components/Admin/UsersHome";
import Login1 from "./Components/Auth/Login1";
import Dashboard1 from "./Components/Dashboard/Dashboard1";
import Register1 from "./Components/Auth/Register1";
import LoginDashboard from "./Components/Dashboard/LoginDashboard";
import UserEdit from "./Components/Admin/UserEdit";
import Home from "./Components/Home/Home";
import StudentNotes from "./Components/Student/StudentNotes";
import EditStudentNotes from "./Components/Student/EditStudentNotes";
import HomeStuentNotes from "./Components/Student/HomeStudentNotes";
import StudentNotesDetails from "./Components/Student/StudentNotesDetails";
import CreateUser from "./Components/Admin/CreateUser";
import HomeUser from "./Components/Admin/HomeUser";
import EditUser from "./Components/Admin/EditUser";
import sendmail from "./Components/Admin/sendmail";


function App() {
  

    // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = "./login";
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/login1" component={Login1}></Route>

          <Route path="/register" component={Register} />
          <Route path="/register1" component={Register1} />

          <Route path="/login" component={Login} />

          <Route path="/UH" component={UserHome}></Route>
          <Route path="/loginDash" component={LoginDashboard}></Route>
          <Route path="/UE/:id" component={UserEdit}></Route>

          <Route path="/CSN" component={StudentNotes}></Route>
          <Route path="/USN/:id" component={EditStudentNotes}></Route>
          <Route path="/HSN" component={HomeStuentNotes}></Route>
          <Route path="/SND" component={StudentNotesDetails}></Route>

          <Route path="/CU" component={CreateUser}></Route>
          <Route path="/HU" component={HomeUser}></Route>
          <Route path="/EU/:id" component={EditUser}></Route>

          <Route path="/sendmail" component={sendmail}></Route>
          

          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard1" component={Dashboard1} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
