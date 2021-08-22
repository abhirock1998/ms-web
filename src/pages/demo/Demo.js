import React from "react";
import "./demo.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function DemoPage() {
  const dispatch = useDispatch();
  setTimeout(() => {
    const animations = document.querySelectorAll(".animate-class");
    animations.forEach((animation) => {
      animation.classList.add("active");
    });
  }, 3000);
  setTimeout(() => {
    const fadeImage = document.querySelector(".demo-page-second-overlay");
    const centerImage = document.querySelector(".demo-page-preload");
    centerImage.style.display = "none";
    fadeImage.style.zIndex = "100";
  }, 5000);

  const selectedLanguage = (index) => {
    dispatch({ type: "SELECTED_LANG", payload: index });
  };
  return (
    <div className="demo--page">
      <div className="demo-page-static">
        <div className="demo-page-second-overlay animate-class">
          <div className="grid">
            <div className="top-left-lang">
              <img src="/images/logo.png" alt="ms-logo" />
              <div className="demo-top-left-fade animate-class" />
            </div>
            <div className="lang-select-wrapper">
              <div className="lang-select-title flex-50">
                <div className="lang-select-main-box">
                  <h1>Select Language</h1>
                  <div className="select-lang-fade-text animate-class" />
                </div>
              </div>
              <div className="lang-select-spacer ">
                <div className="lang-select-spacer-fill animate-class" />
              </div>
              <div className="lang-select-language-options flex-50">
                <div className="language-option ">
                  <ul>
                    <li>
                      <Link onClick={() => selectedLanguage("en")} to="/en/">
                        English
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => selectedLanguage("de")} to="/de/">
                        Deutsch
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => selectedLanguage("it")} to="/it/">
                        Italiano
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => selectedLanguage("fr")} to="/fr/">
                        Francais
                      </Link>
                    </li>
                  </ul>
                  <div className="language-option-fade animate-class" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-page-first-overlay">
          <div className="demo-page-rela">
            <div className="points">
              <div className="grid grid--points">
                <div className="points__row">
                  <div className="point animate-class"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                </div>
                <div className="points__row">
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                </div>
                <div className="points__row">
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                </div>
                <div className="points__row">
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                  <div className="point animate-class"></div>
                </div>
                <div className="points__row">
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                </div>
                <div className="demo-page-preload ">
                  <div className="demo-page-preload-inner">
                    <img src="/images/logo.png" alt="ms-logo" />
                    <div className="demo-page-fade-image animate-class" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
