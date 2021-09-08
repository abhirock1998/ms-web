import React, { useEffect } from "react";
import "./data-security.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { amountscrolled } from "../../helper/scroll";
function DataSecurity({ setPos }) {
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
      <div className="homePage--grid data-security">
        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half hrms   ">
                <p id="stroke-page-title">data security & privacy</p>
                <h1 id="heading" className="data-security-heading">
                  As the world is increasingly interconnected, Everyone shares
                  the responsibility of securing the cyberspace.
                </h1>
              </div>
            </div>
          </div>
          <div className="similar-grid gdr-compilance">
            <h1>GDPR Compliance</h1>
            <img src="/images/gdr.png" alt="gder-poster" />
            <p>
              With effect from May 25th 2018, European Union has strengthened
              its data privacy norms by rolling out Global Data Protection
              Regulation (GDPR). The new regulation ensures no personal data of
              any individual can be accessed by anyone within or outside
              European Territories and poses fines for data breaches up to 4% of
              annual global revenue, <br />
              <br /> We, at Megasoft, have{" "}
              <b>
                fully revamped our privacy, security, data purging and data
                governance strategies
              </b>{" "}
              thereby standing among the top few organizations to be{" "}
              <b>fully compliant to GDPR Norms</b>.
            </p>
          </div>
          <div className="data-processig-step">
            <div className="data-flex">
              <div className="data-column">
                <h2>Data Security</h2>
                <ul>
                  <li>Encrypted Data Transfer</li>
                  <li>Encrypted Database Storage</li>
                  <li>Tier IV Certified Data Centers</li>
                  <li>SSAE Type II Secured System</li>
                  <li>Enhanced Firewall Security</li>
                  <li>Data Processing Inventory</li>
                  <li>Scheduled Audit & Backups</li>
                </ul>
              </div>
              <div className="data-column">
                <h2>Data Purging</h2>
                <ul>
                  <li>Purging Through Tested Scripts</li>
                  <li>Data for Purging Includes:</li>
                  <li>Input & Processing Files</li>
                  <li>Checking & Output Files</li>
                  <li>Database Tables</li>
                  <li>DR Storage & Backup Media</li>
                  <li>Scheduled Audits for Data Purging</li>
                </ul>
              </div>
              <div className="data-column">
                <h2>Disaster Recovery</h2>
                <ul>
                  <li>Emergency Response Team</li>
                  <li>Business Recovery Team</li>
                  <li>Designated DR Site</li>
                  <li>DRP Documentation Storage</li>
                  <li>Recovery Point Objectives (RPO)</li>
                  <li>Recovery Time Objectives (RTO)</li>
                  <li>Regular Disaster Recovery Drills</li>
                </ul>
              </div>
            </div>
            <p>
              We, at Megasoft, consider data as a primary asset and as such must
              be protected in a manner commensurate to its value. We have
              designed our data security, data purging and disaster recovery
              policies to ensure that data is protected in all of its forms, on
              all media, during all phases of its life cycle, from unauthorized
              or inappropriate access, use, modification, disclosure, or
              destruction. Few highlights of our data security policies are
              scribbled above:
            </p>
          </div>
          <div className="job-requistion-section  white similar-grid">
            <div className="job-left-section">
              <h2>Single Sign On </h2>
              <p>
                Megasoft has enabled single sign-on process to enable Client’s
                employees to login to the HRMS software with a single ID and
                password to gain access to a connected system or systems without
                using different usernames or passwords.
              </p>
            </div>
            <div className="job-right-section white">
              <img src="/images/sso.png" alt="job-requistion-section-poster" />
            </div>
          </div>
          <div className="job-requistion-section  white similar-grid">
            <div className="job-right-section white">
              <img src="/images/xml.png" alt="job-requistion-section-poster" />
            </div>
            <div className="job-left-section">
              <h2>Data Inputs in XML Format</h2>
              <p>
                To ensure highly secure data transfer between our Clients and
                MS, we have transformed the data encryption using XML formats.
                Further, we have also encrypted our database storage for maximum
                data security using AES mechanism.
              </p>
            </div>
          </div>
          <div className="certificate-container">
            <h1>Certificates</h1>
            <img src="/images/soc.png" alt="SOC-certificate" />
            <img src="/images/bsi.png" alt="BSI-certificate" />
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}

export default DataSecurity;
