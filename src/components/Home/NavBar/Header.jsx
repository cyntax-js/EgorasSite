import React from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

// styles
import "../../../css/header.css";
import "../../../css/headerMobile.css";

const Header = () => {
  return (
    <section className="headerSection">
      <div className="header-area">
        <a href="#">
          {" "}
          <img src="../img/egoras-logo.svg" alt="..." className="egr-logo" />
        </a>

        <ul className="headerLinks">
          <li className="explore activeLink">
            Explore Loans <ArrowDropDownIcon />
          </li>
          <li className="docs">Documents</li>
          <li className="about">About</li>

          <li className="metrics">Token Metrics</li>
        </ul>
        <ul className="headerButtons">
          <li className="getLoan">
            Get The Loan
            <div className="getLoanHover"></div>
          </li>

          <li className="connect">
            Connect Wallet
            <div className="connectHover"></div>
          </li>
        </ul>
        <img src="../img/hamburger-open.svg" alt="" className="hamburgerOpen" />
      </div>
    </section>
  );
};

export default Header;
