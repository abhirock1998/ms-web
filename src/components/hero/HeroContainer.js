import React from "react";
import "./hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function HeroContainer() {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-parent",
          start: "bottom 50%",
          scrub: 1,

          toggleActions: "play reverse restart pause"
        }
      })
      .to(".slide", {
        yPercent: 150,
        zIndex: -1
      });
  }, []);
  return (
    <div id="intro" className="intro--inner">
      <div className="grid   hero-parent  ">
        <div className="intro-heading slide">
          <div className="">
            <small className="white">Product and Services</small>
          </div>
          <h1 id="heading">
            Highly configurable solutions delivered by professionals
          </h1>
        </div>
      </div>
      <div className="points points--intro">
        <div className="grid grid--points ">
          <div className="points__row points__row--upper">
            {/* <img
              className="mega-logo"
              src="https://kxm4v.csb.app/images/logo.png"
              alt="mega-logo"
            /> */}
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
      {/* <div className="intro--bg"></div> */}
    </div>
  );
}
