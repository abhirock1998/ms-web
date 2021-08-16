import React from "react";
import "./professional.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { ProfessionalServicesContent } from "../../fixtures/pages-content/proffessional-services";
import { useSelector } from "react-redux";
import { translateContent } from "../../helper/translator";
export default function ProfessionalComponent() {
  const { selectedLanguage } = useSelector((state) => state);
  translateContent();
  return (
    <div className="homePage">
      <div className="homePage--grid professional">
        {/* <img alt="recruitment-poster" src="/images/professional.png" /> */}
        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half hrms">
                <p>{ProfessionalServicesContent.heroContainer.smallHeading}</p>
                <h1 id="heading">
                  {ProfessionalServicesContent.heroContainer.description}
                </h1>
              </div>
            </div>
          </div>
          <div className="similar-grid">
            <div className="professional-wrapper">
              {ProfessionalServicesContent.rowColumnData
                .slice(0, 2)
                .map((data, i) => (
                  <div className="professional-content">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                  </div>
                ))}
            </div>
            <div className="professional-wrapper">
              {ProfessionalServicesContent.rowColumnData
                .slice(2, 4)
                .map((data, i) => (
                  <div className="professional-content">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="professional-wrapper-contact similar-grid">
            <h2>Contact Us</h2>
            <div className="professional-form">
              <div className="professional-form-flex">
                <div className="professional-form-half">
                  <input placeholder="Name" />
                </div>
                <div className="professional-form-half">
                  <input placeholder="Phone Number " />
                </div>
              </div>
              <div className="professional-form-flex">
                <input placeholder="Email" />
              </div>
              <div className="professional-form-flex">
                <div className="professional-form-half">
                  <input placeholder="Company Name" />
                </div>
                <div className="professional-form-half">
                  <input placeholder="Company Size" />
                </div>
              </div>
              <button>Send</button>
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
