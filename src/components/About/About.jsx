import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "../../css/about.css";
import "../../css/aboutMobile.css";

const About = () => {
  return (
    <div>
      {/* hero section start */}
      <section className="heroSection3">
        <div className="heroArea3">
          <div
            className="heroTxts3"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-once="false"
          >
            <h1 className="heroTitle3">What is Egoras</h1>
            <p className="hero3para">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="hero-images3" data-aos="fade-left">
            <iframe
              className="iFrame2"
              width="600px"
              height="500px"
              src="https://www.youtube.com/embed/RXPPrnrWuss"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div
            className="aboutTxts"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="AboutLine"></div>
            <div className="loanDetailsTitle">
              <h1 className="ATitle">About Us</h1>
            </div>
            <p className="AboutUsPara">
              Lorem, ipsum dolor sit amet consectetur <br />
              adipisicing elit. Repudiandae facere provident <br />
              reprehenderit tenetur, magnam sint tempora beatae
              <br /> quo rerum assumenda, dignissimos, cumque
              <br /> quibusdam perferendis vitae! Atque odit,
              <br /> odio magni quod fugiat tempore delectus
              <br /> nemo quaerat temporibus quidem!
              <br /> Reiciendis dicta, consectetur, at est repellat beatae
              <br /> aut porro quos accusamus praesentium suscipit
              <br /> tempore commodi. Nam
              <br /> ipsa porro mollitia maiores necessitatibus,
              <br /> dolorum impedit?
            </p>
          </div>
        </div>
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}

      {/* Tokens Section Start */}
      <section className="tokenSection">
        <div className="tokenArea">
          <div
            className="tokenCard1"
            data-aos="zoom-out"
            data-aos-duration="0.2s"
            data-aos-easing="linear"
            data-aos-once="false"
          >
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

          <div
            className="tokenCard1"
            data-aos="zoom-in"
            data-aos-duration="0.2s"
            data-aos-easing="linear"
            data-aos-once="false"
          >
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
      {/* Benefits Section start */}
      <section className="benefitsSection">
        <div className="titleLine"></div>
        <div className="howItWorksTitle">
          <h1 className="title">Benefits</h1>
        </div>

        <div className="benefitsArea">
          <div
            className="benefitCard1"
            data-aos="fade-up"
            data-aos-duration="2s"
            data-aos-easing="linear"
            data-aos-once="false"
          >
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

          <div
            className="benefitCard2"
            data-aos="fade-up"
            data-aos-duration="1s"
            data-aos-easing="linear"
            data-aos-once="false"
          >
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

          <div
            className="benefitCard3"
            data-aos="fade-up"
            data-aos-duration="1s"
            data-aos-easing="linear"
            data-aos-once="false"
          >
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

          <div
            className="benefitCard4"
            data-aos="fade-up"
            data-aos-duration="1s"
            data-aos-easing="linear"
            data-aos-once="false"
          >
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
    </div>
  );
};

export default About;
