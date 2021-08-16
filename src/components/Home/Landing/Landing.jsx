import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";
// import Carousel from "react-bootstrap/Carousel";
// styles
import "../../../css/Landing.css";
import "../../../css/landingMobile.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Landing = () => {
  return (
    <div>
      {/* hero section start */}
      <section className="heroSection">
        <div className="heroArea">
          <div className="heroTxts">
            <h1 className="heroTitle">
              Uncollateralised
              <br /> micro-credits.
            </h1>
            <p className="heroCaption">FOR SMALL ENTREPRENEURS</p>
            <p className="heroPara">
              Egoras microfinance protocol provides uncollateralised
              micro-credit
              <br />
              to small entrepreneurs and enterprises who cannot take shelter of
              banks
              <br /> for banking and other services.
            </p>
            <div className="heroButton">
              <a href="#" className="heroBtn">
                Learn more
                <div className="learnHover"></div>
              </a>
            </div>
          </div>

          <div className="hero-images">
            <img src="../img/phone-hero.png" alt="" className="heroPhone" />
            <img src="../img/shape-egg.svg" alt="" className="eggShape" />
            <img src="../img/dots.svg" alt="" className="dots" />
            <img src="../img/x-shape.svg" alt="" className="x" />
            <img src="../img/circle.svg" alt="" className="circle" />
            <div className="card-amount">
              <img src="../img/coin-icon.svg" alt="" className="coin" />
              <p className="amount">800,000</p>
            </div>
          </div>
        </div>
        <div className="bottomCards">
          <div className="card1 active ">
            <h3 className="support">
              I want to Support
              <br />
              <span className="supportPara">Check how you can help</span>
            </h3>
            <a href="#">
              <ArrowForwardIcon className="arrowIcon active" />
            </a>
          </div>
          <div className="card2 ">
            <h3 className="support">
              I want to Support
              <br />
              <span className="supportPara">Check how you can help</span>
            </h3>
            <a href="#">
              <ArrowForwardIcon className="arrowIcon " />
            </a>
          </div>
        </div>

        <Carousel responsive={responsive} className="heroCard" showDots={true}>
          <div className="card1 active ">
            <h3 className="support">
              I want to Support
              <br />
              <span className="supportPara">Check how you can help</span>
            </h3>
            <a href="#">
              <ArrowForwardIcon className="arrowIcon active" />
            </a>
          </div>
          <div className="card2 ">
            <h3 className="support">
              I want to Support
              <br />
              <span className="supportPara">Check how you can help</span>
            </h3>
            <a href="#">
              <ArrowForwardIcon className="arrowIcon " />
            </a>
          </div>
        </Carousel>

        <img src="../img/blur-drop.png" alt="" className="blurDrop" />
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* How it Works Section Start */}
      <section className="howItWorks">
        <div className="titleLine"></div>
        <div className="howItWorksTitle">
          <h1 className="title">How it works</h1>
        </div>
        <div className="howItWorksBtns">
          <div>
            <a href="#" className="btn1 active">
              Supporter
            </a>
          </div>
          <div>
            <a href="#" className="btn2   ">
              Loan Taker
            </a>
          </div>
        </div>
        <div className="howItWorksArea">
          <div className="howCard1">
            <div className="howCard1Title">
              <h1 className="stakeNumb">1.</h1>

              <img src="../img/stake-loan.svg" alt="" className="stakeLoan" />
            </div>
            <div className="howCard1Texts">
              Stake your token
              <br />
              <p className="howCard1TextsP">
                Browse by category and stake <br />
                your EGR token to support an
                <br />
                entrepreneur.
              </p>
            </div>
          </div>
          <div className="howCard2">
            <div className="howCard2Title">
              <h1 className="stakeNumb">2.</h1>

              <img src="../img/approve-loan.svg" alt="" className="stakeLoan" />
            </div>
            <div className="howCard2Texts">
              Approve Loans
              <br />
              <p className="howCard2TextsP">
                Fund loans without risking your
                <br />
                EGR token.
              </p>
            </div>
          </div>
          <div className="howCard3">
            <div className="howCard3Title">
              <h1 className="stakeNumb">3.</h1>

              <img
                src="../img/claim-interest.svg"
                alt=""
                className="stakeLoan"
              />
            </div>
            <div className="howCard3Texts">
              Claim Interest weekly
              <br />
              <p className="howCard3TextsP">
                Earn over 20% APR for
                <br />
                approving/declining loans.
              </p>
            </div>
          </div>
        </div>
        <a href="#" className="getStartedButton">
          Get Started
          <div className="getStartedHover"></div>
        </a>
        <img src="../img/left-back-drop.svg" alt="" className="leftBack" />
        <img src="../img/second-dots.svg" alt="" className="secondDots" />
      </section>
      {/* How it Works Section End */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection">
        <div className="projectsArea">
          <div className="projectsLine"></div>
          <div className="projectsTitleContents">
            <div className="projectTitle">
              <h1 className="pTitle">Recent projects</h1>

              <p className="projectsPara">All Categories</p>
            </div>

            <a href="#" className="projectsLink">
              Explore loans
              <div className="projectsLinkHover"></div>
            </a>
          </div>

          {/* Carousel start==============================
==============================================
============================= */}
          <Carousel
            responsive={responsive}
            className="caroCard1"
            showDots={true}
          >
            <div className="cardA">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardB">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardC">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardD">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardE">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardF">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardG">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardH">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardI">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div className="cardJ">
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
          </Carousel>
          {/* Carousel end==============================
==============================================
============================= */}
        </div>
      </section>
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Benefits Section start */}
      <section className="benefitsSection">
        <div className="titleLine"></div>
        <div className="howItWorksTitle">
          <h1 className="title">Benefits</h1>
        </div>

        <div className="benefitsArea">
          <div className="benefitCard1">
            <div className="bCardIcon">
              <img src="../img/b-icon1.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Low-Interest
                <br />
                Micro-Credit
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>

          <div className="benefitCard2">
            <div className="bCardIcon">
              <img src="../img/b-icon2.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Lend Funds without <br />
                risking your capital
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>

          <div className="benefitCard3">
            <div className="bCardIcon">
              <img src="../img/b-icon3.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Borrow with no collateral
                <br /> regardless of your location
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>

          <div className="benefitCard4">
            <div className="bCardIcon">
              <img src="../img/b-icon4.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Earn high-yield <br />
                on credits
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>
        </div>

        <img src="../img/right-back-drop.svg" alt="" className="rightBack" />
        <img src="../img/shape-egg2.svg" alt="" className="eggShape2" />
      </section>
      {/* Benefits Section start */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Stories Section Start  */}
      <section className="storiesSection">
        <div className="storiesArea">
          {/* <img
            src="../img/playButton.svg"
            alt=""
            className="playButton"
            onClick={vid}
          /> */}
          <iframe
            className="iFrame"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/RXPPrnrWuss"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          {/* <img src="../img/VideoSnapShot.png" alt="" className="snapShot" /> */}
        </div>
        <img src="../img/video-dots.svg" alt="" className="vidDots" />
      </section>
      {/* Stories Section End  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Partners Section start  */}
      <section className="partnersSection">
        <div className="titleLine"></div>
        <div className="howItWorksTitle">
          <h1 className="title">Our Partners</h1>
        </div>
        <Carousel
          responsive={responsive}
          className="PartnersArea"
          className="teamCaro"
        >
          <div className="patLogo">
            <a href="#">
              <img src="../img/soriana-lg.svg" alt="" className="soriana" />
            </a>
          </div>
          <div className="patLogo">
            <a href="#">
              <img src="../img/nec-lg.svg" alt="" className="nec" />
            </a>
          </div>
          <div className="patLogo">
            <a href="#">
              <img src="../img/cono-lg.svg" alt="" className="soriana" />
            </a>
          </div>
          <div className="patLogo">
            <a href="#">
              <img src="../img/indeed-lg.svg" alt="" className="soriana" />
            </a>
          </div>
          <div className="patLogo">
            <a href="#">
              <img src="../img/cono-lg.svg" alt="" className="soriana" />
            </a>
          </div>
          <div className="patLogo">
            <a href="#">
              <img src="../img/nec-lg.svg" alt="" className="soriana" />
            </a>
          </div>
          <div className="patLogo">
            <a href="#">
              <img src="../img/indeed-lg.svg" alt="" className="soriana" />
            </a>
          </div>
        </Carousel>
        <img
          src="../img/partner-circle.svg"
          alt=""
          className="partnersCircle"
        />
      </section>
      {/* Partners Section end  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Tokens Section Start */}
      <section className="tokenSection">
        <div className="tokenArea">
          <div className="tokenCard1">
            <img src="../img/main-token.svg" alt="" className="mainToken" />
            <div className="tokenLine"></div>
            <div className="tokenCard1texts">
              <h1 className="tokenCard1Heading">
                Egoras (EGS) <ArrowForwardIcon className="arrowIcon " />
              </h1>
              <p className="tokenCard1Para">
                EGS is a decentralized cryptocurrency stabilized against the
                value of the <br />
                US dollar, it uses egoras loan governance to respond to changing
                market
                <br /> conditions and preserve its value against the US dollar.
                Unlike other
                <br /> popular stablecoins whose value is backed directly by
                USD, it’s backed
                <br /> by crypto collaterals.
              </p>
            </div>
          </div>

          <div className="tokenCard1">
            <img src="../img/token-right.svg" alt="" className="mainToken" />
            <div className="tokenLine"></div>
            <div className="tokenCard1texts">
              <h1 className="tokenCard1Heading">
                Egoras Right (EGR) <ArrowForwardIcon className="arrowIcon " />
              </h1>
              <p className="tokenCard1Para">
                EGR is the fluctuating token of egoras protocol and it plays a
                role in
                <br /> stabilizing EGS and the governance of the loan protocol.
                EGR is required
                <br /> for paying the interest and this means that as the
                adoption and demand
                <br /> for the Egoras Credit system increases, there will be
                additional demand
                <br /> for EGR.
              </p>
            </div>
          </div>
        </div>
        <img src="../img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* explore section  start */}
      <section className="exploreSection">
        <div className="exploreArea">
          <div className="exploretxts">
            <h1 className="good">Sounds good?</h1>
            <div className="exploreLink">
              <a href="#" className="exploreLoansbtn">
                Explore loans
              </a>
            </div>
          </div>

          <img src="../img/explore-dots.svg" alt="" className="exploreDots" />
          <img src="../img/explore-shape.svg" alt="" className="exploreShape" />
        </div>
      </section>
      {/* explore section  end */}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

export default Landing;
