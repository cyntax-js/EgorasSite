import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";

import "../../css/loanDetails.css";
import "../../css/loandetailsMobile.css";

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

const LoanDetails = () => {
  return (
    <div>
      {/* hero section start */}
      <section className="heroSection2">
        <div className="heroArea2">
          <div className="heroTxts2" data-aos="fade-right">
            <h1 className="heroTitle2">
              For Mrs. Eno Friday <br />
              Okon to improve her
              <br />
              <span className="restaurant">restaurant </span>
              business.
            </h1>
            <div className="heroSlider">
              <div className="slider-txts1">
                <div className="p-texts">
                  <p className="ptxt1">Yes</p>
                  <p className="ptxt2">No</p>
                </div>
                <div className="h-texts">
                  <h3 className="htxt1">82%</h3>
                  <h3 className="htxt2">18%</h3>
                </div>
              </div>
              <div className="slider"></div>
              <div className="slider-txts2">
                <div className="p-texts2">
                  <p className="ptxt1">Yes Powered by 54000 EGR</p>
                  <p className="ptxt2">No Powered by 655 EGR</p>
                </div>
              </div>
            </div>
            <div className="heroButton">
              <a href="#" className="heroBtn">
                Repay Loan
                <div className="learnHover"></div>
              </a>
            </div>
          </div>

          <div className="hero-images" data-aos="zoom-in">
            <img
              src="../img/carouselpic.png"
              alt=""
              className="restaurantPic"
            />

            <div className="card-amount">
              <img src="../img/coin-icon.svg" alt="" className="coin" />
              <p className="amount">₦800,000</p>
            </div>
          </div>
        </div>
        <img
          src="../img/last-loanDetails-Hero-Dot.svg"
          alt=""
          className="loanDetailsDot"
        />
        <img
          src="../img/loan-hero-img-right.svg"
          alt=""
          className="hero-right"
        />
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* loan details Section start*/}
      <section className="loanDetailsSection">
        <div className="loanDetailsLine" data-aos="fade-right"></div>
        <div className="loanDetailsTitle">
          <h1 className="LTitle" data-aos="fade-right">
            Loan Details
          </h1>
        </div>
        <div className="loanDetailsArea">
          <div className="loanDetailsDays">
            <div className="loanDetailsCards" data-aos="fade-right">
              <div className="detailsCard1">
                <p className="ldTitle1">Loan Amount</p>
                <h1 className="ldAmount1">₦800,000</h1>
              </div>

              <div className="vl"></div>

              <div className="detailsCard2">
                <p className="ldTitle1">Loan Lenght</p>
                <h1 className="ldAmount2">180 Days</h1>
              </div>
            </div>
            <div className="ldCardTexts1" data-aos="fade-right">
              Payment: <span className="payment"> At end of term</span>
            </div>
            <div className="ldCardTexts2" data-aos="fade-right">
              Disbursed date: <span className="payment"> 7 May 2021</span>
            </div>
            <div className="ldCardTexts3" data-aos="fade-right">
              {" "}
              Funding model:
              <span className="payment"> Weekly</span>
            </div>

            <div className="ldCardTexts4" data-aos="fade-right">
              {" "}
              Partner covers currency loss?
              <span className="payment"> Yes</span>
            </div>
            <div className="ldCardTexts5" data-aos="fade-right">
              {" "}
              Facilitated by Field Partner:{" "}
              <span className="payment"> Storaji LTD.</span>
            </div>
            <div className="ldCardTexts6" data-aos="fade-right">
              {" "}
              Is borrower paying interest?
              <span className="payment"> Yes</span>
            </div>
          </div>
          <div className="loanDetailsStory">
            <h4 className="storyTitle" data-aos="fade-left">
              STORY
            </h4>
            <p className="storyTxts" data-aos="fade-left">
              Mrs Eno Friday Okon who resides at the apostolic road, Umuebele 4
              has a restaurant she
              <br /> has been running for over five (5) years. She sells
              varieties of food and drinks. Due to the
              <br /> increase in the price of foodstuff and drinks as a result
              of the pandemic, she has been
              <br /> unable to meet up to her regular supply
              <br />
              <br /> and needs a loan of ₦100,000 for six (6) months to help
              improve and boost her business by buying enough foodstuffs as
              required and getting enough drinks so that she can
              <br /> meet up with the regular demands from her customers.
              <br />
              <br /> She has in the past collected loans of ₦100,000 from Lapo
              and BC respectively and paid
              <br /> back. She makes a profit of about ₦10,000 daily and has
              promised to pay back the
              <br /> borrowed funds.
            </p>
          </div>
        </div>
        <img
          src="../img/loandetails-bg.svg"
          alt="loandetails-bg.svg"
          className="loandetailsbg"
        />
      </section>
      {/*  loan details Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection2">
        <div className="projectsArea">
          <div className="projectsLine" data-aos="fade-right"></div>
          <div className="projectsTitleContents">
            <div className="projectTitle">
              <h1 className="pTitle" data-aos="fade-right">
                Recent projects
              </h1>

              <p className="projectsPara" data-aos="fade-right">
                All Categories
              </p>
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
            <div
              className="cardA"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardB"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardC"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardD"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardE"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardF"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardG"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardH"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardI"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
              <div className="img">
                <img src="../img/carouselpic.png" alt="" className="caroImg" />
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>

            <div
              className="cardJ"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
            >
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
        <img
          src="../img/projects-blurbg.png"
          alt=""
          className="projectsBlurbg"
        />
      </section>
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

export default LoanDetails;
