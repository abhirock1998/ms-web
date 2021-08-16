import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainLinks, hrmSubMenuList } from "../../fixtures/routes-config";
export default function MenuSliderPage({ menu, handle }) {
  const dispatch = useDispatch();
  const { activePageLink, selectedLanguage, subActiveMenuLink } = useSelector(
    (state) => state
  );
  const [activeLink, setActiveLink] = useState(0);
  const [subMenu, setSubMenu] = useState(0);

  useEffect(() => {
    setActiveLink(activePageLink);
    setSubMenu(subActiveMenuLink);
  }, [activePageLink, subActiveMenuLink]);
  const displayHrmsLinks = () => {
    const slide = document.querySelector(".fetchClass");
    slide.classList.add("active");
    setTimeout(() => {
      document
        .querySelector(".menu-right-side-overlay")
        .classList.add("active");
    }, 200);
  };
  const hideHrmsLink = (i) => {
    document
      .querySelector(".menu-right-side-overlay")
      .classList.remove("active");
    if (i !== 1) {
      setTimeout(() => {
        document.querySelector(".fetchClass").classList.remove("active");
      }, 1000);
    }
  };
  const handleActive = (idx) => {
    setActiveLink(idx);
    dispatch({ type: "ACTIVE_LINK", payload: idx });
    if (idx === 1) {
      displayHrmsLinks();
    } else {
      hideHrmsLink(idx);
      handleHrmsSubMenu(null);
      handle();
    }
    hideHrmsLink(idx);
  };
  const handleHrmsSubMenu = (link) => {
    setSubMenu(link);
    dispatch({ type: "ACTIVE_SUB_MENU_LINK", payload: link });
    handle();
  };
  return (
    <section id="menu" className={` ${menu ? "active" : "hide"} `}>
      <div className="menu__container">
        {/* <div className="menu__logo sm-show"></div> */}
        <div className="grid grid--menu ">
          <div className="menu__left">
            <small>Menu</small>
            <div className="menu-slide-left-side-links">
              {mainLinks.map((data, idx) =>
                idx !== 1 ? (
                  <div
                    key={idx}
                    className={`link-left-side ${
                      activeLink === idx ? "active" : null
                    }`}
                  >
                    <Link
                      onClick={() => handleActive(idx)}
                      to={`/${selectedLanguage}${data.link}`}
                    >
                      {data.title}
                    </Link>
                  </div>
                ) : (
                  <div
                    key={idx}
                    onClick={() => handleActive(idx)}
                    className={`link-left-side ${
                      activeLink === 1 ? "activeColor" : null
                    }`}
                  >
                    {data.title}
                  </div>
                )
              )}
            </div>
            <div
              id="lang-switcher"
              className="footer--social-logo menu lang-switcher lang-switcher--footer"
            >
              <ul>
                <li
                  className={`${selectedLanguage === "fr" ? "active" : null}`}
                >
                  <a data-lang="fr" href="/fr/service-assistance">
                    fr
                  </a>
                </li>
                <li
                  className={`${selectedLanguage === "it" ? "active" : null}`}
                >
                  <a data-lang="it" href="/it/assistenza-e-supporto">
                    it
                  </a>
                </li>
                <li
                  className={`${selectedLanguage === "de" ? "active" : null}`}
                >
                  <a data-lang="de" href="/de/service-support-2">
                    de
                  </a>
                </li>
                <li
                  className={`${selectedLanguage === "en" ? "active" : null}`}
                >
                  <a
                    aria-current="page"
                    className=""
                    data-lang="en"
                    href="/en/service-support"
                  >
                    en
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu__right fetchClass">
            <nav id="main-nav">
              <ul>
                {hrmSubMenuList.map((data, idx) => (
                  <li key={idx}>
                    <div className="link-main-container line line--parent">
                      <Link
                        onClick={() => handleHrmsSubMenu(idx)}
                        to={`/${selectedLanguage}${data.link}`}
                        className={`link-main line line--child ${
                          idx === 5 && "handyhrtitle "
                        } ${subMenu === idx && "active"}`}
                      >
                        {data.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-right-side-overlay " />
          </div>
        </div>
      </div>
      {/* <div className="page-overlay"></div> */}
    </section>
  );
}
