import React, { useEffect } from "react";
import "./management.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { amountscrolled } from "../../helper/scroll";
export default function PerformanceManagement({ setPos }) {
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
      <div className="homePage--grid management">
        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half hrms management  ">
                <p>Performance Management</p>
                <h1 id="heading">
                  Periodic, Systematic, and Objective Process To Align The
                  Employees Work To The Company’s Goals.
                </h1>
              </div>
            </div>
          </div>
          <div className="job-requistion-section goal-setting similar-grid">
            <div className="job-left-section">
              <h2>Goal Settting</h2>
              <p>
                Automated payroll calculation through breakdown of taxes,
                allowances, and deductions. Your employees can access pay slips
                easily through the software or the mobile app.
              </p>
            </div>
            <div className="job-right-section">
              <img src="/images/goal.png" alt="job-requistion-section-poster" />
            </div>
          </div>
          <div className="job-requistion-section kraandkpi similar-grid">
            <div className="job-right-section">
              <img src="/images/kpi.svg" alt="job-requistion-section-poster" />
            </div>
            <div className="job-left-section">
              <h2>KRA & KPI</h2>
              <p>
                KRA and Key Performance Indicator Mapping are vital for your
                business. With KRA & KPI mapping, you will be able to assess the
                performance of your employees.
              </p>
            </div>
          </div>
          <div className="job-requistion-section   analysis similar-grid">
            <div className="job-left-section">
              <h2>Performance Analysis</h2>
              <p>
                Performance Analysis tracks your employees’ progress to ensure
                that they are meeting their goals every month/quarterly. Assign
                a weightage to your employee’s tasks to get a more holistic
                view.
              </p>
            </div>
            <div className="job-right-section">
              <img
                src="/images/performance.svg"
                alt="job-requistion-section-poster"
              />
            </div>
          </div>
          <div className="job-requistion-section promotion similar-grid">
            <div className="job-right-section">
              <img
                src="/images/promotion.png"
                alt="job-requistion-section-poster"
              />
            </div>
            <div className="job-left-section">
              <h2>Promotion Recommendation</h2>
              <p>
                Based on the KRA and KPI indicators set by the management, and
                our performance analysis, reward your employees in an informed
                manner.
              </p>
            </div>
          </div>
          <div className="job-requistion-section performance similar-grid">
            <div className="job-left-section">
              <h2>Performance Improvement Plan</h2>
              <p>
                Performance Analysis tracks your employees’ progress to ensure
                that they are meeting their goals every month/quarterly. Assign
                a weightage to your employee’s tasks to get a more holistic
                view.
              </p>
            </div>
            <div className="job-right-section">
              <img src="/images/plan.svg" alt="job-requistion-section-poster" />
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
