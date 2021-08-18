import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

// styles
import "../../../css/header.css";
import "../../../css/headerMobile.css";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <section className="headerSection">
      <div className="header-area">
        <a href="/">
          {" "}
          <img src="../img/egoras-logo.svg" alt="..." className="egr-logo" />
        </a>

        <ul className="headerLinks">
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
              <li className="explore activeLink" onClick={handleClick}>
                Explore Loans <ArrowDropDownIcon />
              </li>
              {open ? (
                <div className="ExploreLoanDropdown">
                  <div className="loanCatDropdown">
                    <div className="loanCat">
                      <h6 className="loanCatTitle">LOAN CATEGORIES</h6>
                      <div className="loanCatLinks">
                        <li>
                          <a href="#" className="loanCatli1 active">
                            Agriculture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="loanCatli1">
                            Retail
                          </a>
                        </li>
                        <li>
                          <a href="#" className="loanCatli1">
                            Women
                          </a>
                        </li>
                        <li>
                          <a href="#" className="loanCatli1">
                            Single Parents
                          </a>
                        </li>
                        <li>
                          <a href="#" className="loanCatli1">
                            All Loans
                          </a>
                        </li>
                      </div>
                    </div>
                    <div className="loanStatus">
                      <h6 className="loanStatusTitle">LOAN STATUS</h6>
                      <div className="loanStatusLinks">
                        <li>
                          <a href="#" className="loanStatli1">
                            Agriculture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="loanStatli1">
                            Declined Loans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="loanStatli1">
                            Ongoing Loans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="loanStatli1">
                            Approved Loans
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </ClickAwayListener>

          <li className="docs">Documents</li>
          <Link to="/about" className="about">
            <li>About</li>
          </Link>

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
