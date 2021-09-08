import React, { useEffect } from "react";
import "./payroll.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { amountscrolled } from "../../helper/scroll";

export default function PayrollComponent({ setPos }) {
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
      <div className="homePage--grid payroll">
        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half recruitment  ">
                <p>Payroll</p>
                <h1 id="heading">
                  Fast, Efficient and Effective Multiple pay structure
                  calculations made easier.
                </h1>
              </div>
            </div>
          </div>
          <div className="job-requistion-section processing similar-grid">
            <div className="job-left-section">
              <h2>Payroll Processing</h2>
              <p>
                Automated payroll calculation through breakdown of taxes,
                allowances, and deductions. Your employees can access pay slips
                easily through the software or the mobile app.
              </p>
            </div>
            <div className="job-right-section">
              <img
                src="/images/processing.png"
                alt="job-requistion-section-poster"
              />
            </div>
          </div>
          <div className="job-requistion-section flexi-basket similar-grid">
            <div className="job-right-section">
              <img
                src="/images/basket.svg"
                alt="job-requistion-section-poster"
              />
            </div>
            <div className="job-left-section">
              <h2>Flexi Basket</h2>
              <p>
                Enables employees to choose the benefits they want or need from
                a range of programs offered by your organization.
              </p>
            </div>
          </div>
          <div className="bigpayroll-container similar-grid">
            <div className="bigpayroll-leftside">
              <div className="bigpayroll-contentBox">
                <h2>Investment Declaration</h2>
                <p>
                  Increase your employees compliance to tax norms and ensure
                  correct tax deduction at source.
                </p>
              </div>
              <div className="bigpayroll-contentBox">
                <h2>Tax Calculator</h2>
                <p>
                  Tax calculation makes it easy for you to calculate your tax
                  liability and gives you detailed information on how much tax
                  you owe or how much of a rebate you can expect.
                </p>
              </div>
              <div className="bigpayroll-contentBox">
                <h2>Statutory Reports & Registers</h2>
                <p>
                  Effortlessly process by automatically calculating employees
                  overtime income owed and any other one time payments like
                  bonus and ex-gratia
                </p>
              </div>
              <div className="bigpayroll-contentBox">
                <h2>Reimbursement Processing</h2>
                <p>
                  Create and customize your own reimbursement policies according
                  to the type of expenses your employees incur.
                </p>
              </div>
              <div className="bigpayroll-contentBox">
                <h2>Overtime/Bonus</h2>
                <p>
                  Effortlessly process by automatically calculating employees
                  overtime income owed and any other one time payments like
                  bonus and ex-gratia
                </p>
              </div>
            </div>
            <div className="bigpayroll-rightside">
              <img src="/images/bigpayroll.png" alt="" />
            </div>
          </div>
          <div className="payroll-inmtegration-partner abhishek similar-grid">
            <h2>Integrations with your exisiting platforms</h2>
            <img src="/images/partner.png" alt="" />
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
