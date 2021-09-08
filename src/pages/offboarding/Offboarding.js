import React, { useEffect } from "react";
import "./offboarding.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { amountscrolled } from "../../helper/scroll";
export default function OffBoarding({ setPos }) {
  useEffect(() => {
    document.querySelectorAll(".scrollbar-thumb").forEach((link) => {
      link.style.transform = `translateY(0px)`;
    });
  }, []);
  useEffect(() => {
    const scrollHandle = () => {
      var perc = amountscrolled();
      setPos((p) => perc * 1.07);
    };
    window.addEventListener("scroll", scrollHandle, false);
    return () => {
      window.removeEventListener("scroll", scrollHandle, false);
    };
  }, []);
  return (
    <div className="homePage">
      <div className="homePage--grid offboarding">
        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half recruitment  offboarding-hero ">
                <p>Offboarding</p>
                <h1 id="heading">
                  Whether you are an HR manager or a manager in charge of the
                  employee's exit, it is important to ensure that all processes
                  that are associated with the terminating of an employee are
                  managed correctly. Exit management software enables
                  organizations to make sure those processes are well executed.
                </h1>
              </div>
            </div>
          </div>
          <div className="job-requistion-section  exit similar-grid">
            <div className="job-left-section">
              <h2>Exit Request</h2>
              <p>
                Automated payroll calculation through breakdown of taxes,
                allowances, and deductions. Your employees can access pay slips
                easily through the software or the mobile app.
              </p>
            </div>
            <div className="job-right-section">
              <img src="/images/exit.svg" alt="job-requistion-section-poster" />
            </div>
          </div>
          <div className="bigpayroll-container offboarding similar-grid">
            <div className="bigpayroll-leftside">
              <div className="bigpayroll-contentBox">
                <h2>Exit Interview</h2>
                <p>
                  The motivation behind the exit interview is to give input on
                  why employees are leaving, what they liked or didn't care for
                  about the organization and what spaces of the organization
                  they feel need improvement. Exit interview software gathers
                  information from exit interviews and offers an analysis of the
                  same.
                </p>
              </div>
              <div className="bigpayroll-contentBox">
                <h2>Exit Clearance</h2>
                <p>
                  With Exit Clearance, your HR will have easy access to all the
                  information they need to successfully complete the exit
                  process.
                </p>
              </div>
              <div className="bigpayroll-contentBox">
                <h2>F&F Settlement</h2>
                <p>
                  Our F&F module will give your employees full and final
                  settlement, including unpaid salary, leave encasement, and end
                  of service gratuity. Ensure that your Managers maintain full
                  100% control over all activities related to payroll during
                  employee exit.
                </p>
              </div>
            </div>
            <div className="bigpayroll-rightside abhishek">
              <img src="/images/flow.png" alt="" />
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
