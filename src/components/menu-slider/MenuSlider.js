import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainLinks, hrmSubMenuList } from "../../fixtures/routes-config";
export default function MenuSliderPage({ menu = false, handle }) {
  const dispatch = useDispatch();
  const { activePageLink, selectedLanguage, subActiveMenuLink } = useSelector(
    (state) => state
  );
  const [activeLink, setActiveLink] = useState(0);
  const [subMenu, setSubMenu] = useState(0);
  const ref = useRef(false);
  useEffect(() => {
    setActiveLink(activePageLink);
    setSubMenu(subActiveMenuLink);
  }, [activePageLink, subActiveMenuLink]);
  useEffect(() => {
    var section = document.querySelector("#menu");
    if (menu === false && !ref.current) {
      ref.current = true;
      section.style.display = "none";
    }
  }, [menu]);
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
    <section
      style={{ display: menu && "unset" }}
      id="menu"
      className={` ${menu ? "active" : "hide"} `}
    >
      <div className="menu__container">
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
            ></div>
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
    </section>
  );
}
