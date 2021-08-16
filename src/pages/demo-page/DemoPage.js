import React from "react";
import "./demo-page.css";
import { GoToHomePageLinkLogo } from "../../components";
export default function DemoPage() {
  return (
    <div className="homePage">
      <div className="homePage--grid about-and-vision login-demo">
        {/* <img alt="recruitment-poster" src="/images/demo.png" /> */}
        <div className="demo-page-bg-container">
          <div className="homePage--overlay ">
            <div id="intro" className="intro--index not">
              <div className="grid   hero-parent  ">
                <div className="grid-company-logo">
                  <GoToHomePageLinkLogo />
                </div>
                <div className="demo-page-obverlay-wrapper">
                  <div className="demo-page-flex-wrapper">
                    <div className="demo-page-half">
                      <h1>
                        Contact Us for a Demo
                        <img src="/images/clap.png" alt="" />
                      </h1>
                      <div className="demo-page-form-wrapper">
                        <div className="form-row-wrapper">
                          <div className="demo-page-form-wrapper-half">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="demo-page-form-wrapper-half">
                            <input
                              type="telephone"
                              placeholder="Phone Number "
                            />
                          </div>
                        </div>

                        <div className="demo-page-form-wrapper-full">
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-row-wrapper">
                          <div className="demo-page-form-wrapper-half">
                            <input type="text" placeholder="Company Name" />
                          </div>
                          <div className="demo-page-form-wrapper-half">
                            <input type="text" placeholder="Company Size" />
                          </div>
                        </div>
                        <button id="form-submit-btn">Send</button>
                        <p id="form-response-time">
                          <small>We usually reply within 24-48 hours</small>
                        </p>
                      </div>
                    </div>
                    <div className="demo-page-half">
                      <img src="/images/laptop.png" alt="" />
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
