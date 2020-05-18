import React, { Component } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import memory from "../../img/image.gif";

import Typed from "react-typed";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-header">Healthcare Pro</div>
        <div className="home-snippet">
          Rethinking how we manage Healthcare System
        </div>
       
        <img className="home-bg" src={memory} alt="brushstrokes" />
        <Typed
          strings={[
            "See your perscribtions...",
            "See your future appointments...",
            "Flexible to use...",
            "Save your patients history...",
            "Save and save all at once..."
          ]}
          typeSpeed={50}
          backSpeed={50}
          backDelay={1000}
          loop
          smartBackspace
        />
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Create Account</Link>
      </div>
    );
  }
}



export default Home;