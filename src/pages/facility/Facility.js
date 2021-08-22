import React, { useEffect, useRef } from "react";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import "./facility.css";
import { FacilityCardList } from "../../fixtures/facilty-card-list";
import { amountscrolled } from "../../helper/scroll";
export default function FacilityManagement() {
  const videoRef = useRef();
  const control = useRef();
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
  const handlePlay = () => {
    var media = videoRef.current;
    if (media.paused) {
      media.play();
      control.current.src = "/images/pause.png";
    } else {
      media.pause();
      control.current.src = "/images/pla.png";
    }
  };
  return (
    <div className="homePage">
      <div className="homePage--grid facility">
        <div className="homePage--overlay">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half hrms facility-management  ">
                <p>
                  <span>facility</span>
                  management
                </p>
                <h1 id="heading">
                  A unique module that lets your employees book your
                  organization's facilities such as canteen requirements, guest
                  house, stationary, etc. Administrator's can view inventory
                  left and add stock for any of the facilities offered.
                </h1>
              </div>
            </div>
          </div>
          <div className="facility-management-facility">
            {FacilityCardList.map((card, idx) => (
              <div key={idx} className="facility-card">
                <div className="facility-card-image">
                  <img
                    id={`${card.icon}-facility-icon`}
                    src={`/images/${card.icon}-icon.png`}
                    alt="facility-icon"
                  />
                  <img
                    src={`/images/${card.icon}-img.png`}
                    alt="facility-img"
                  />
                </div>
                <h2>{card.title}</h2>
              </div>
            ))}
          </div>
          <div className="facility-management-video-section">
            <div className="facility-management-video-holder">
              <video
                ref={videoRef}
                src="/images/facility.mp4"
                loop
                playsInline
              ></video>
              <div className="play-btn-video">
                <img
                  ref={control}
                  onClick={handlePlay}
                  src="/images/pla.png"
                  alt="play-btn"
                />
              </div>
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
