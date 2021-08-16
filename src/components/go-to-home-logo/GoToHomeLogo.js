import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function GoToHomePageLogo() {
  const { selectedLanguage } = useSelector((state) => state);
  return (
    <Link to={`/${selectedLanguage}/`}>
      <img className="mega-logo" src="/images/logo.png" alt="mega-logo" />
    </Link>
  );
}
