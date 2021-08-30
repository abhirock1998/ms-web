import React, { useRef, useState } from "react";
import "./demo-page.css";
import { GoToHomePageLinkLogo } from "../../components";
import { SendContactFormDetails } from "../../helper/node-mailer";
const SendFormat = {
  fromName: "from_name",
  mobile: "mobile",
  email: "email",
  compName: "company_name",
  compSize: "company_size",
};
export default function DemoPage() {
  const btn = useRef();
  const [detail, setDetails] = useState({
    from_name: "",
    mobile: "",
    email: "",
    company_name: "",
    company_size: "",
  });
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
      <div className="homePage--grid about-and-vision login-demo">
        <div className="demo-page-bg-container">
          <div className="homePage--overlay ">
            <div id="intro" className="intro--index not">
              <div className="grid   hero-parent  ">
                <div className="grid-company-logo">
                  <GoToHomePageLinkLogo />
                </div>
                <div className="demo-page-obverlay-wrapper">
                  <div className="demo-page-flex-wrapper">
                    <div className="demo-page-half">
                      <h1>
                        Contact Us for a Demo
                        <img src="/images/clap.png" alt="" />
                      </h1>
                      <form className="demo-page-form-wrapper">
                        <div className="form-row-wrapper">
                          <div className="demo-page-form-wrapper-half">
                            <input
                              required
                              type="text"
                              onChange={handleChange}
                              name={SendFormat.fromName}
                              value={detail.from_name}
                              placeholder="Name"
                            />
                          </div>
                          <div className="demo-page-form-wrapper-half">
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

                        <div className="demo-page-form-wrapper-full">
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
                        <div className="form-row-wrapper">
                          <div className="demo-page-form-wrapper-half">
                            <input
                              required
                              type="text"
                              value={detail.company_name}
                              onChange={handleChange}
                              name={SendFormat.compName}
                              placeholder="Company Name"
                            />
                          </div>
                          <div className="demo-page-form-wrapper-half">
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
                        <button
                          ref={btn}
                          type="submit"
                          onClick={handleMail}
                          id="form-submit-btn"
                        >
                          Send
                        </button>
                        <p id="form-response-time">
                          <small>We usually reply within 24-48 hours</small>
                        </p>
                      </form>
                    </div>
                    <div className="demo-page-half">
                      <img src="/images/laptop.png" alt="" />
                    </div>
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
