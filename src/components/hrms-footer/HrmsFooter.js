import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./hrms-footer.css";
import { footerLeftList, footerRightList } from "../../fixtures/routes-config";
import { socialIconsList } from "../../fixtures/social-link";
export default function HrmsFotter() {
  const { selectedLanguage } = useSelector((state) => state);
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="hrms-footer similar-grid">
      <div className="hrms-footer-two-column-flex">
        <div className="hrms-footer-inner">
          <div className="footer-first-column">
            <Link to={`/${selectedLanguage}/`}>
              <img src="/images/footer-logo.png" alt="footer-MS-logo" />
            </Link>
            <p>
              subscribe to our newsletter for updates on compliance, payroll
              management and other industry insights
            </p>
            <div className="footer-first-column-subscribe-wrapper">
              <input type="email" placeholder="EMAIl Address" />
              <button>Susbcribe</button>
            </div>
          </div>
          <div className="footer-second-column">
            <Link to={`/${selectedLanguage}/`}>
              <img src="/images/footer-logo.png" alt="footer-MS-logo" />
            </Link>
            <div className="footer-second-column-inner-flex">
              <div className="footer-second-column-inner-half">
                <ul>
                  {footerLeftList.map((link, i) => (
                    <li key={i}>
                      <Link
                        onClick={() => handleScroll()}
                        to={`/${selectedLanguage}${link.link}`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-second-column-inner-half">
                <ul>
                  {footerRightList.map((link, i) => (
                    <li key={i}>
                      <Link to={`/${selectedLanguage}${link.link}`}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-third-column">
          {socialIconsList.map((icon, i) => (
            <a
              id={`${icon.title}-id`}
              target="_blank"
              rel="noreferrer noopener"
              href={icon.link}
              key={i}
              className="footer-third-column-social-icon-box"
            >
              <img
                src={`/images/${icon.title}.png`}
                alt={`hrms-${icon.title}-logo`}
              />
              {i === socialIconsList.length - 2 && <span>Let's Chat</span>}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="footer-bootom-box">
          <span>Corporate Office:</span>
          <address>
            475, Udyog Vihar Phase V, Gurgaon, Haryana- 221292 India
          </address>
        </div>
        <div className="footer-bootom-box">
          <p>Copyright © 2021 Megasoft Solutions India Private Limited.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
