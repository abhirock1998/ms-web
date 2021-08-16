import React from "react";
import "./handyhr.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
const appFeatures = [
  "Facial Recognition Attendance ",
  "Offline Attendance for 24/7 uptime",
  "Workflow Based",
  "Employee Scheduling and Shift Management",
  "Overtime & Half Day Calculation",
  "In Built Offline Face Storage Capacity",
  "Detection Process- Image and Retina",
  "Employee Self Service"
];
export default function HandyHrComponent() {
  return (
    <div className="homePage">
      <div className="homePage--grid handyhr">
        {/* <img alt="recruitment-poster" src="/images/hr.png" /> */}
        <div className="homePage--overlay ">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half handyHr recruitment  ">
                <img src="/images/handy.png" alt="" />
                <h1 id="heading">HRMS and Payroll on the go</h1>
              </div>
            </div>
          </div>
          <div className="hrms-handyhr-section feature similar-grid">
            <div className="job-left-section">
              <h2>
                Employee can mark their attendance from anywhere using the Handy
                HR app which seamlessly syncs with our payroll
              </h2>
              <ul>
                {appFeatures.map((feature, idx) => (
                  <li key={idx}>
                    <div className="feature-name">
                      <span>{idx + 1}.</span>
                      <span>{feature}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="job-right-section">
              <img
                src="/images/mobile.svg"
                alt="job-requistion-section-poster"
              />
            </div>
          </div>

          <div className="hr-handy-app-milestone similar-grid">
            <div className="hr-handy-app-center">
              <h3>MILES AHEAD OF THE CURVE</h3>
              <img src="/images/milestone.png" alt="handy-app-milestone" />
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
