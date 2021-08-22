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
const smallScreenLinkList = {
  en: [
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
  ],
  it: [
    {
      title: "HRMS",
      link: hrms,
    },
    {
      title: "Libro paga",
      link: payroll,
    },
    {
      title: `Talento\nAcquisizione`,
      link: recruitment,
    },
    { title: `Prestazioni\nGestione`, link: performanceManagement },
    { title: "Struttura\nGestione", link: facilityManagement },
    { title: "HANDYHR", link: handyHr },
    { title: "fuoribordo", link: offboarding },
    { title: "Professional\nServizi", link: professionalService },
    { title: "Informazioni e visione", link: aboutAndVision },
    {
      title: "Contattaci",
      link: contact,
    },
  ],
  fr: [
    {
      title: "SIRH",
      link: hrms,
    },
    {
      title: "Paie",
      link: payroll,
    },
    {
      title: `Gain\nde talent`,
      link: recruitment,
    },
    { title: `Gestion\ndes performances`, link: performanceManagement },
    { title: "Gestion des\nperformances", link: facilityManagement },
    { title: "HANDYHR", link: handyHr },
    { title: "Débarquement", link: offboarding },
    { title: "Services\nprofessionnels", link: professionalService },
    { title: "À propos & Vision", link: aboutAndVision },
    {
      title: "Nous contacters",
      link: contact,
    },
  ],
  de: [
    {
      title: "HRMS",
      link: hrms,
    },
    {
      title: "Loonlijst",
      link: payroll,
    },
    {
      title: `Talent\nAcquisitie`,
      link: recruitment,
    },
    { title: `Prestaties\nBeheer`, link: performanceManagement },
    { title: "Faciliteit\nBeheer", link: facilityManagement },
    { title: "HANDYHR", link: handyHr },
    { title: "Offboarden", link: offboarding },
    { title: "Professionele\nDiensten", link: professionalService },
    { title: "Over & Visie", link: aboutAndVision },
    {
      title: "Neem contact op",
      link: contact,
    },
  ],
};
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
