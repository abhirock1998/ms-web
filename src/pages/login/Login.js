import React from "react";
import "./login.css";
import { GoToHomePageLinkLogo } from "../../components";
export default function DemoPage() {
  return (
    <div className="homePage">
      <div className="homePage--grid about-and-vision login-demo">
        <div className="demo-page-bg-container login-page">
          <div className="homePage--overlay ">
            <div id="intro" className="intro--index not">
              <div className="grid   hero-parent  ">
                <div className="grid-company-logo">
                  <GoToHomePageLinkLogo />
                </div>
                <div className="demo-page-obverlay-wrapper">
                  <div className="demo-page-flex-wrapper login">
                    <div className="login-page-center-wrapper">
                      <h1>Login</h1>
                      <input type="text" placeholder="Company" />
                      <input type="email" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <button id="login-button-login-page">Send</button>
                      <p id="form-response-time">
                        <small>Forgot Password?</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
