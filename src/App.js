import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AboutAndVisionPage,
  CompanyDemoPage,
  DemoPage as LanguageSelectedPage,
  HandyHRPage,
  HomePageComponent,
  HrmsPage,
  LoginPage,
  ManagementPage,
  OffboardingPage,
  PayrollPage,
  ProfessionalManegementPage,
  RecruitmentPage,
  FacilityManagementPage
} from "./pages";
import "./styles.css";
import { MenuSliderComp } from "./components";
import { RoutesPathConfig } from "./fixtures/routes-path-config";
export default function App() {
  const [pos, setPos] = React.useState(0);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    document.querySelectorAll(".scrollbar-thumb").forEach((link) => {
      link.style.transform = `translateY(${pos}px)`;
      link.style.transition = "transform .5s linear";
    });
  }, [pos]);
  const handleSlide = () => {
    setMenu(!menu);
  };
  return (
    <div className="App">
      {/* Page content */}
      <section data-scrollbar="true" id="scroll-container">
        <Switch>
          <Route path={RoutesPathConfig.contact}>
            <CompanyDemoPage />
          </Route>
          <Route path={RoutesPathConfig.login}>
            <LoginPage />
          </Route>
          <Route path={RoutesPathConfig.takeaDemo}>
            <CompanyDemoPage />
          </Route>
          <Route path={RoutesPathConfig.facilityManagement}>
            <FacilityManagementPage />
          </Route>
          <Route path={RoutesPathConfig.offboarding}>
            <OffboardingPage />
          </Route>
          <Route path={RoutesPathConfig.aboutAndVision}>
            <AboutAndVisionPage />
          </Route>
          <Route path={RoutesPathConfig.professionalService}>
            <ProfessionalManegementPage />
          </Route>
          <Route path={RoutesPathConfig.handyHr}>
            <HandyHRPage />
          </Route>
          <Route path={RoutesPathConfig.performanceManagement}>
            <ManagementPage />
          </Route>
          <Route path={RoutesPathConfig.payroll}>
            <PayrollPage />
          </Route>
          <Route path={RoutesPathConfig.hrms}>
            <HrmsPage />
          </Route>
          <Route path={RoutesPathConfig.recruitment}>
            <RecruitmentPage />
          </Route>
          <Route path={RoutesPathConfig.home}>
            <HomePageComponent setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.languageSelect}>
            <LanguageSelectedPage />
          </Route>
        </Switch>
      </section>
      {/* Sidebar in right width fixed position */}
      <aside className=" ">
        <button
          onClick={handleSlide}
          className={`btn btn--burger ${
            menu ? "active" : ""
          } btn--blank menu-toggle`}
        >
          <span className="btn--burger__part btn--burger__part--up"></span>
          <span className="btn--burger__part btn--burger__part--down"></span>
        </button>
      </aside>

      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--0">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--1">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--2">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--3">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div className="scrollbar-thumb scrollbar-thumb-y clone clone--1"></div>
      <div className="scrollbar-thumb scrollbar-thumb-y clone clone--2"></div>
      <div className="scrollbar-thumb scrollbar-thumb-y clone clone--3"></div>
      <div className="scrollbar-thumb scrollbar-thumb-y clone clone--4"></div>
      <MenuSliderComp menu={menu} handle={handleSlide} />
      <div className="scrollbar-line scrollbar-line--1"></div>
      <div className="scrollbar-line scrollbar-line--2"></div>
      <div className="scrollbar-line scrollbar-line--3"></div>
    </div>
  );
}
