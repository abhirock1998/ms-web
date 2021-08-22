import React, { useEffect } from "react";
import "./hrms.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { amountscrolled } from "../../helper/scroll";
export default function HRMSCompomnent({ setPos }) {
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
      <div className="homePage--grid hrms">
        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half hrms   ">
                <p>HRMS</p>
                <h1 id="heading">
                  Megasoft is driving the world of Human resource management to
                  adopt cutting edge technology at modern organisations for a
                  happier, highly engaged workforce, more efficient and
                  profitable businesses.
                </h1>
              </div>
            </div>
          </div>
          <div className="job-requistion-section hrms similar-grid">
            <div className="job-left-section">
              <h2>HR Directory</h2>
              <p>
                eHRMS will make it possible to handle all information about
                employees centralized in one single platform, organized and well
                structured.
              </p>
            </div>
            <div className="job-right-section">
              <img
                src="/images/directory.svg"
                alt="job-requistion-section-poster"
              />
            </div>
          </div>
          <div className="hrms-org-chart-section">
            <h2>Org Charts</h2>
            <p id="small-device-subtext">
              Easy to use and understand organization charts to show a complete
              picture of your company’s employee structure and chain of command.
            </p>
            <div className="chart-poster-holder">
              <img src="/images/org.png" alt="chart-poster" />
            </div>
            <div className="hrms-section-content">
              <p>
                Easy to use and understand organization charts to show a
                complete picture of your company’s employee structure and chain
                of command.
              </p>
            </div>
          </div>
          <div className="job-requistion-section employee similar-grid">
            <div className="job-right-section">
              <img
                src="/images/employee.png"
                alt="job-requistion-section-poster"
              />
            </div>
            <div className="job-left-section center">
              <h2>Employee Self Service</h2>
              <p>
                Employee self-service can help many companies save labor hours
                and increase efficiency. Employees are enabled to take care of
                many different human resources (HR)-related and job-related
                tasks that would otherwise need to be completed by personnel in
                the HR department or management.
              </p>
            </div>
          </div>
          <div className="job-requistion-section time similar-grid">
            <div className="job-left-section">
              <h2>Time & Attendance </h2>
              <p>
                Time and attendance software is an efficient way to keep track
                of employee hours whether they're working remotely or in the
                office. Automatic time tracking applications allow you to access
                data from anywhere, making it easier than ever to keep track of
                how much time your employees work.
              </p>
            </div>
            <div className="job-right-section">
              <img src="/images/time.png" alt="job-requistion-section-poster" />
            </div>
          </div>
          <div className="hrms-travel-assistance">
            <div className="hrms-travel-flex">
              <div className="hrms-travel-section-left">
                <h2>Tuition Assistance</h2>
                <p>
                  Tuition Assistance Plans are offered by a number of companies
                  to help pay for continued education in connection with an
                  employee's current position or for career development
                </p>
              </div>
              <div className="hrms-travel-section-right">
                <h2>Travel and Expense</h2>
                <p>
                  With the Expense Management Suite, travel, expense and invoice
                  management couldn't be easier. Maximize control over your AP
                  processes with automated integration and real-time monitoring.
                </p>
              </div>
            </div>
          </div>
          <div className="job-requistion-section form similar-grid">
            <div className="job-right-section">
              <img src="/images/form.png" alt="job-requistion-section-poster" />
            </div>
            <div className="job-left-section center">
              <h2>Forms, Policies & Surveys</h2>
              <p>
                Our Onboarding solution is designed to make onboarding easier
                for everyone. eHRMS provides them with guidance, tools, and
                information they need to feel welcome and become productive
                members of the team.
              </p>
            </div>
          </div>
          <div className="job-requistion-section helpdesk similar-grid">
            <div className="job-left-section">
              <h2>Helpdesk</h2>
              <p>
                Help you settle tech issues quicker and permit IT divisions to
                work proficiently through 24-7 support . It coordinates data,
                streamlines work processes. For round the clock assistance use
                our in-house chatbot.
              </p>
            </div>
            <div className="job-right-section">
              <img
                src="/images/helpdesk.png"
                alt="job-requistion-section-poster"
              />
            </div>
          </div>
          <div className="job-requistion-section chatbot similar-grid ">
            <div className="job-right-section">
              <video
                style={{ zIndex: "10", height: "300px" }}
                controls
                muted
                src="/images/chatbot.mp4"
                loop
                autoPlay
              ></video>
            </div>
            <div className="job-left-section">
              <h2>Chatbot</h2>
              <p>
                Our Onboarding solution is designed to make onboarding easier
                for everyone. eHRMS provides them with guidance, tools, and
                information they need to feel welcome and become productive
                members of the team.
              </p>
            </div>
          </div>
          <div className="hrms-handyhrms-app">
            <h2>HandyHR App</h2>
            <p>Learn how we at Megasoft can help you empower your business </p>
            <img src="/images/mobile.png" alt="hrmshandy-app-poster" />
          </div>
          <div className="download-app-section">
            <div className="left-section">
              <h3>
                Handy HR, a powerful app that allows employees to mark their
                attendance from anywhere; making it easy for them to access work
                information and update their attendance in real time.
              </h3>
            </div>
            <div className="right-section">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.ms.handyHRv2&hl=en_IN&gl=US"
                id="download-app-btn"
              >
                Download Now
              </a>
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
