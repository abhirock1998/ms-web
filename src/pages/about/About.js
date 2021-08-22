import React, { useEffect } from "react";
import "./about.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PathConfig } from "../../fixtures/routes-path-config";
import { amountscrolled } from "../../helper/scroll";
export default function About({ setPos }) {
  const { selectedLanguage } = useSelector((state) => state);
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
  return (
    <div className="homePage">
      <div className="homePage--grid about-and-vision">
        <img alt="recruitment-poster" src="/images/about-hero.png" />
        <div className="homePage--overlay ">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half about-vision recruitment  ">
                <h1>About and Vision</h1>
                <Link to={`/${selectedLanguage}${PathConfig.contact}`}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="hrms-handyhr-section vision-about similar-grid">
            <div className="vision-first">
              <h3>Vision</h3>
            </div>
            <div className="vision-second abhishek">
              <p>
                We are primarily a B2B firm providing Payroll, HR Tech,
                Taxation, Compliance and other professional services. We believe
                in providing solutions for any problem faced by our clients.
              </p>
               
              <p>
                Started in 1998, Megasoft Solutions was a small payroll company
                which has now steadily grown to provide a whole host of services
                appreciated by our clients and their employees as well.
              </p>
               
              <p>
                Over the years, we have strived to be the most technologically
                forward team of technical personnel, lawyers and chartered
                accountants. However, we felt that due to our older
                technological databases, we need to future ready with our
                products dynamically.
              </p>
               
              <p>
                We believe that the next two years are a new beginning for
                Megasoft, where we will reimagine our company, our products, and
                our services for our clients. We believe in the potential of our
                team and our knowledge to create a line of global products which
                will be used by small and medium businesses as well as
                large-scale enterprises.
              </p>
               
              <p>
                We also visualize Megasoft being a leader in the industry and
                partnering with the world’s largest firms where we can help them
                create and innovate through the power of technology and
                automation.
              </p>
               
              <p>
                Our aim in these next two years is not only increasing revenue
                but more importantly the primary objective is to grow, as a
                company, a product, and as people who are willingly to put in
                hard work to help our clients and employees to better. We aim to
                create a company where our employees are encouraged to be
                creative, to take risks and innovate. To be a company where work
                is what our employees believe in and strive to do.
              </p>
               
              <p>
                We at Megasoft also understand that India is a developing nation
                and there are millions of small business owners who can benefit
                from technology. One of our goals is to provide these small
                business owners with completely affordable ERP tools to help
                them grow their business.
              </p>
            </div>
          </div>
          <div className="  similar-grid">
            <h1>Our Visionary</h1>
            <div className="hrms-handyhr-section vision-about ">
              <div className="vision-first">
                <img id="sanjeev-image-card" src="/images/sanjeev.png" alt="" />
              </div>
              <div className="vision-second">
                <h4>Sanjeev Jain (Late)</h4>
                <p className="post">
                  Sanjeev Jain was a well established Chartered Accountant with
                  over 25 years of profound experience in Taxation (both Direct
                  and Indirect) including International Taxation, Transfer
                  Pricing, and Service Tax. As a reputed Charted Accountant, he
                  had strong technical knowledge of accounting principles,
                  International laws, and business structuring.
                </p>
                <br />
                <p className="post">
                  Sanjeev was responsible for overall strategy, creation of
                  proficient teams, and business growth. He had fruitfully
                  created a partnership model with clients to attain common
                  objectives and create a mark of success and satisfaction in
                  the industry.
                </p>
                <br />
                <p>
                  Represented the Airline Operating Committee (AOC) in India
                </p>
                <p>
                  Was a Member of Board at Indo-Canadian Chamber of Commerce
                </p>
                <p>
                  Handled all matters of Litigation, Tax Advice and Audit for 12
                  International Airlines Operating in India
                </p>
              </div>
            </div>
          </div>
          <div className="  similar-grid">
            <h1>Leadership</h1>
            <div className="hrms-handyhr-section vision-about ">
              <div className="vision-first">
                <img src="/images/anil.png" alt="" />
              </div>
              <div className="vision-second">
                <h4>Anil Makhija</h4>
                <p className="post">
                  Heading the Legal department at Megasoft Solutions, Anil is a
                  practicing advocate and a proud member of the Bar Council of
                  Delhi (1995). An expert at law in both the national as well as
                  international arena specialising in the domain of Direct and
                  Indirect taxation, he represents numerous clients before the
                  Income Tax Apellate Tribunal, Customs Excise and Service Tax
                  Appelate Tribunal, High Courts, and the Supreme Court of
                  India.
                </p>
              </div>
            </div>
            <div className="hrms-handyhr-section vision-about ">
              <div className="vision-first">
                <img src="/images/sapna.png" alt="" />
              </div>
              <div className="vision-second">
                <h4>Sapna Jain</h4>
                <p className="post">
                  Graduated with an economics honours from Delhi University,
                  Sapna Jain has ed HR management and administration at the firm
                  for over 12 years, managing the human capital of over a 120
                  employees and implenting innovations for over 20,000 of our
                  client’s employees. She has helped create a feature rich HRMS
                  using data based on the internal requirements and those of our
                  global clients. As a counsel and partner to Mr. Jain, have
                  created a global enterprise with a major client list with over
                  95% retention rate.
                </p>
              </div>
            </div>
            <div className="hrms-handyhr-section vision-about ">
              <div className="vision-first">
                <img src="/images/mayank.png" alt="" />
              </div>
              <div className="vision-second">
                <h4>Mayank Jain</h4>
                <p className="post">
                  The youngest member of our team and an advocate. Mayank is now
                  leading the payroll and HRMS division. Having trained under
                  his father (Mr. Jain), Mayank is now working on taking
                  Megasoft to new heights. Mayank has been playing a crucial
                  role in product development and creating a brand new line of
                  products which we will showcase soon. He plans on making
                  megasoft into the company his father always envisioned it to
                  be.
                </p>
              </div>
            </div>
          </div>
          <div className="hrms-handyhr-section vision-about similar-grid">
            <div className="vision-first">
              <h3>About Us</h3>
            </div>
            <div className="vision-second">
              <p>
                Megasoft Solutions India Pvt. Ltd. is reckoned as one of the
                most trusted IT based Service Providers, specializing in
                back-end services in the spectrum of Human Resource, Finance &
                Accounting, and Information Technology. In this, the company
                offers Payroll, Compliances HRMS, Accounting, Finance and ERP
                Solutions with Integration of Technology.
              </p>
              <br />
              <p>
                The company was started by Mr. Sanjeev Kumar Jain (Founder &
                CEO) and Mr. Anil Makhija (Director) in 1998. From small
                beginnings, it has grown to be leading independent company in
                India. Centrally located its state-of-the-art backend processing
                facility in Gurgaon-NCR, Megasoft Solutions has a strong
                foothold across globe including Singapore, Dubai, Hong-Kong, and
                Germany.
              </p>
              <br />
              <p>
                Megasoft has a successful track record of over 22 years in
                serving its clients with innovative and specialized IT based
                solutions with a strong clientele across varied industries and
                sectors comprising of Telecom, Automotive, Retail, Information
                Technology, Manufacturing, and Government-PSUs.
              </p>
              <br />
              <p>
                Furthermore, the main objective of our services and offerings is
                to consolidate the three chief chattels of organization i.e.
                PEOPLE, PROCESSES, SYSTEMS. We design and develop quality
                solutions that help to reach correct information with ease as
                well as enhance the workflow, communication, and business
                transactions of the organization.
              </p>
              <br />
              <p>
                Besides, the company offers an extensive range of specialized
                and multi-disciplinary professional services that meets the
                short-term as well as long-term requirements of any business.
                Megasoft collaborates with individual client to provide
                customized solution right from single transaction-based
                functions to highly scale-up operations. Being a client-centric
                organization, we sternly comprehend and analyse the precise
                requirements of our clients and accordingly offer scalable
                quality solutions to them. Also, we austerely focus on providing
                value added services with an aim to create a strong competitive
                advantage for our precious clients to sustain in an
                ever-changing marketplace.
              </p>
              <br />
              <p>
                Megasoft Solutions is led by a cohesive team of dedicated
                professionals with an ample experience in its relevant fields
                and intense passion to learn as well as innovate. The team
                comprises highly qualified and experienced Chartered
                Accountants, MBAs, Company Secretaries, Cost Accountants, Legal
                Experts, and IT Professionals. These professionals are highly
                skilled and having sound industry knowledge to deliver
                customized SLA based solutions to the esteemed clients belong to
                several industries. Each member of Megasoft team strives to
                levitate to a higher level of creativity with every endeavour
                and gives company the edge to develop as well as maintain a high
                level of competitive advantage and sustainable value adds for
                the clients.
              </p>
              <br />
              <p>
                Megasoft Solutions India works to attain utmost level of clients
                satisfaction based on agreed SLAs and at present, the company
                proudly says that mostly ordered books comprising long term
                associations.
              </p>
               
            </div>
          </div>
          <div className="similar-grid about-and-vision team">
            <img src="/images/team.png" alt="" />
            <div className="meet-out-team">
              <h2>Meet Our Team</h2>
              <Link to={`/${selectedLanguage}${PathConfig.contact}`}>
                Contact Us
              </Link>
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
