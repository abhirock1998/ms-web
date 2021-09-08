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
  FacilityManagementPage,
} from "./pages";
import "./styles.css";
import "./app.css";
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
    <div className="App abhishek">
      {/* ALL PAGES AND THEIR ROUTES GOES HERE*/}
      <section data-scrollbar="true" id="scroll-container abhishek">
        <Switch>
          <Route path={RoutesPathConfig.contact}>
            <CompanyDemoPage />
          </Route>
          <Route path={RoutesPathConfig.login}>
            <LoginPage />
          </Route>
          <Route path={RoutesPathConfig.takeaDemo}>
            <CompanyDemoPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.facilityManagement}>
            <FacilityManagementPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.offboarding}>
            <OffboardingPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.aboutAndVision}>
            <AboutAndVisionPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.professionalService}>
            <ProfessionalManegementPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.handyHr}>
            <HandyHRPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.performanceManagement}>
            <ManagementPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.payroll}>
            <PayrollPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.hrms}>
            <HrmsPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.recruitment}>
            <RecruitmentPage setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.home}>
            <HomePageComponent setPos={setPos} />
          </Route>
          <Route path={RoutesPathConfig.languageSelect}>
            <LanguageSelectedPage />
          </Route>
          <Route path="*">
            <HomePageComponent setPos={setPos} />
          </Route>
        </Switch>
      </section>
      {/* Sidebar in right width fixed position */}
      <aside className=" abhishek">
        <button
          onClick={handleSlide}
          className={`btn btn--burger abhishek${
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
      <div className="scrollbar-thumb scrollbar-thumb-y clone clone--3 abhishek"></div>
      <div className="scrollbar-thumb scrollbar-thumb-y clone clone--4 abhishek"></div>
      <MenuSliderComp menu={menu} handle={handleSlide} />
      <div className="scrollbar-line scrollbar-line--1"></div>
      <div className="scrollbar-line scrollbar-line--2"></div>
      <div className="scrollbar-line scrollbar-line--3"></div>
    </div>
  );
}
