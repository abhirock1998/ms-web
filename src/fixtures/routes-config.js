import { PathConfig } from "./routes-path-config";
const {
  performanceManagement,
  professionalService,
  aboutAndVision,
  offboarding,
  recruitment,
  payroll,
  contact,
  facilityManagement,
  home,
  hrms,
  dataAndSecurity,
  handyHr,
} = PathConfig;
const mainLinks = [
  { title: "Home", link: home },
  { title: "HRMS + Payroll", link: "" },
  { title: "Professional Services", link: professionalService },
  { title: "About & Vision", link: aboutAndVision },
  { title: "Contact", link: contact },
];
const hrmSubMenuList = [
  { title: "HRMS", link: hrms },
  { title: "Payroll", link: payroll },
  { title: "Talent Acquisition", link: recruitment },
  { title: "Performance Management", link: performanceManagement },
  { title: "Facility Management", link: facilityManagement },
  { title: "HANDYHR", link: handyHr },
  { title: "Offboarding", link: offboarding },
];
const smallScreenLinkList = [
  {
    title: "HRMS",
    link: hrms,
  },
  {
    title: "Payroll",
    link: payroll,
  },
  {
    title: `Talent\nAcquisition`,
    link: recruitment,
  },
  { title: `Performance\nManagement`, link: performanceManagement },
  { title: "Facility\nManagement", link: facilityManagement },
  { title: "HANDYHR", link: handyHr },
  { title: "Offboarding", link: offboarding },
  { title: "Professional\nServices", link: professionalService },
  { title: "About & Vision", link: aboutAndVision },
  {
    title: "Contact Us",
    link: contact,
  },
];
const footerLeftList = [
  { title: "Home", link: home },
  { title: "Professional Services", link: professionalService },
  { title: "About & Vision", link: aboutAndVision },
  { title: "Contact", link: contact },
  { title: "Data Security & Privacy", link: dataAndSecurity },
];
const footerRightList = [
  { title: "HRMS", link: hrms },
  { title: "Payroll", link: payroll },
  { title: "Talent Acquisition", link: recruitment },
  { title: "Performance Management", link: performanceManagement },
  { title: "Facility Management", link: facilityManagement },
  { title: "HANDYHR", link: handyHr },
  { title: "Offboarding", link: offboarding },
];
export {
  mainLinks,
  hrmSubMenuList,
  smallScreenLinkList,
  footerLeftList,
  footerRightList,
};
