import React from "react";
import ReactComponent from "../../images/Group.svg";
import ReactComponent2 from "../../images/pablo-sign-in 1.svg";

import "./Login.style.scss";
const Login = () => {
  return (
    <div className="login-cont">
      <div className="logo-holder">
        <img src={ReactComponent} alt="Logo" className="logo" />
      </div>
      <div className="login-details">
        <div className="image-holder">
          <img
            src={ReactComponent2}
            alt="pablo-sign-in"
            className="signin-img"
          />
        </div>
        <div className="form-holder">
          <h4 className="welcome-text">Welcome!</h4>
          <p className="details-text">Enter details to login</p>
          <form className="form">
            <input
              placeholder="Email"
              type="email"
              value=""
              className="input-field"
            />
            <div>
              <input
                placeholder="Password"
                type="password"
                value=""
                className="input-field"
              />{" "}
              <span className="show-span">show</span>
            </div>
            <span className="forgot-span">Forgot password ?</span>
            <input type="submit" placeholder="Login" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
