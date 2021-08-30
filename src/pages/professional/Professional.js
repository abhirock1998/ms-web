import React, { useEffect, useRef, useState } from "react";
import "./professional.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { ProfessionalServicesContent } from "../../fixtures/pages-content/proffessional-services";
import { amountscrolled } from "../../helper/scroll";
import { SendContactFormDetails } from "../../helper/node-mailer";
const SendFormat = {
  fromName: "from_name",
  mobile: "mobile",
  email: "email",
  compName: "company_name",
  compSize: "company_size",
};
export default function ProfessionalComponent({ setPos }) {
  const btn = useRef();
  const [detail, setDetails] = useState({
    from_name: "",
    mobile: "",
    email: "",
    company_name: "",
    company_size: "",
  });
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
  const handleMail = async (e) => {
    e.preventDefault();
    let count = 0;
    for (const [key, _] of Object.entries(detail)) {
      if (detail[key].length > 0 && detail[key] !== "") {
        count++;
      }
    }
    if (count === 5) {
      btn.current.innerHTML = "Sending ...";
      var { status, msg } = await SendContactFormDetails(detail);
      if (status === 200) {
        alert(msg);
      } else {
        alert(msg || "Server is Not Connected");
      }
      btn.current.innerHTML = "Send";
      setDetails({
        from_name: "",
        mobile: "",
        email: "",
        company_name: "",
        company_size: "",
      });
    } else {
      alert("Fill All the input fields !!!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((pre) => {
      return { ...pre, [name]: value };
    });
  };
  return (
    <div className="homePage">
      <div className="homePage--grid professional">
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
                  <div key={i} className="professional-content">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                  </div>
                ))}
            </div>
            <div className="professional-wrapper">
              {ProfessionalServicesContent.rowColumnData
                .slice(2, 4)
                .map((data, i) => (
                  <div key={i} className="professional-content">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="professional-wrapper-contact similar-grid">
            <h2>Contact Us</h2>
            <form className="professional-form">
              <div className="professional-form-flex">
                <div className="professional-form-half">
                  <input
                    required
                    type="text"
                    onChange={handleChange}
                    name={SendFormat.fromName}
                    value={detail.from_name}
                    placeholder="Name"
                  />
                </div>
                <div className="professional-form-half">
                  <input
                    required
                    type="tel"
                    minLength={10}
                    pattern="[0-9]{10}"
                    onChange={handleChange}
                    name={SendFormat.mobile}
                    placeholder="Phone Number "
                    value={detail.mobile}
                  />
                </div>
              </div>
              <div className="professional-form-flex">
                <input
                  required
                  value={detail.email}
                  type="email"
                  pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                  required
                  onChange={handleChange}
                  name={SendFormat.email}
                  placeholder="Email"
                />
              </div>
              <div className="professional-form-flex">
                <div className="professional-form-half">
                  <input
                    required
                    type="text"
                    value={detail.company_name}
                    onChange={handleChange}
                    name={SendFormat.compName}
                    placeholder="Company Name"
                  />
                </div>
                <div className="professional-form-half">
                  <input
                    required
                    value={detail.company_size}
                    type="text"
                    onChange={handleChange}
                    name={SendFormat.compSize}
                    placeholder="Company Size"
                  />
                </div>
              </div>
              <button type="submit" ref={btn} onClick={handleMail}>
                Send
              </button>
            </form>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
