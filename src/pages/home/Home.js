import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoToHomePageLinkLogo } from "../../components";
import { smallScreenLinkList } from "../../fixtures/routes-config";
import { PathConfig } from "../../fixtures/routes-path-config";
import { TranslatedContent } from "../../translated-language-content/main-page-translated-content";
export default function HomePage({ setPos }) {
  const { selectedLanguage = "en" } = useSelector((state) => state);
  React.useEffect(() => {
    const elem = document.querySelector(".scroll-content");
    elem.addEventListener("scroll", (e) => {
      elem.scrollIntoView({ behavior: "smooth" });
      const value = elem.scrollTop;
      setPos((pre) => value * 0.175);
    });
  }, [setPos]);
  return (
    <div className="homePage">
      <div className="homePage--grid home-page-video">
        <video
          poster="/images/globe.png"
          loop
          autoPlay
          muted
          playsInline
          src="/images/globe.mp4"
        ></video>
        <div className="homePage--overlay">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half home-page   ">
                <h1 id="heading home-page">
                  {TranslatedContent[selectedLanguage]["mainTitle"]}
                </h1>
                <div className="small-device-home-page-wrapper">
                  <ul>
                    <li>
                      {smallScreenLinkList[selectedLanguage].map((link, i) => (
                        <Link key={i} to={`/${selectedLanguage}${link.link}`}>
                          {link.title}
                        </Link>
                      ))}
                    </li>
                  </ul>
                  <div className="small-device-home-page-button-wrapper">
                    <Link to={`/${selectedLanguage}${PathConfig.takeaDemo}`}>
                      {TranslatedContent[selectedLanguage]["takeADemo"]}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="intro__content">
                <section
                  data-scrollbar="true"
                  id="intro-scroll-container"
                  className="intro__content__links"
                >
                  <div className="scroll-content">
                    <div>
                      <div className="intro-content-link-container">
                        {smallScreenLinkList[selectedLanguage].map(
                          (data, idx) => (
                            <Link
                              className="link-loop"
                              key={idx}
                              to={`/${selectedLanguage}${data.link}`}
                            >
                              <div className="intro__content__link__wrap">
                                <small className="intro__link__title ">
                                  {data.title}
                                </small>
                                <div className="btn-container fading-text">
                                  <span className="btn btn--arrow btn--arrow--white">
                                    {selectedLanguage === "en"
                                      ? " View"
                                      : selectedLanguage === "fr"
                                      ? "vue"
                                      : selectedLanguage === "it"
                                      ? "Visualizza"
                                      : "weergave"}
                                  </span>
                                </div>
                              </div>
                              <div className="intro_content__link__border intro_content__link__border--anim"></div>
                            </Link>
                          )
                        )}
                      </div>
                      <div className="scroll-content-border scroll-content-left-side-border"></div>
                      <div className="scroll-content-border scroll-content-right-side-border"></div>
                    </div>
                  </div>
                </section>
                <div className="intro__content__contacts">
                  <div className="intro__content__contacts-anim">
                    <small>
                      {TranslatedContent[selectedLanguage]["contactTitle"]}
                    </small>
                    <p>
                      {
                        TranslatedContent[selectedLanguage][
                          "contactDescription"
                        ]
                      }
                    </p>
                    <div className="contact-list contact-list--white contact-list--small">
                      <ul>
                        <li>
                          <label>E-mail : </label>
                          <br />
                          <a href="mailto:contactus@megasoftsol.com">
                            contactus@megasoftsol.com
                          </a>
                        </li>
                        <li>
                          <label>Phone : </label>
                          <br />
                          <a href="tel:+  011 46067710">011-46067710</a>
                        </li>
                      </ul>
                    </div>
                    <Link
                      to={`/${selectedLanguage}${PathConfig.takeaDemo}`}
                      className="home-page-btn"
                    >
                      {TranslatedContent[selectedLanguage]["takeADemo"]}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="points points--intro">
              <div className="grid grid--points ">
                <div className="points__row points__row--upper">
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                </div>
                <div className="points__row points__row--middle">
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                </div>
                <div className="points__row points__row--bottom">
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                  <i className="point"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
