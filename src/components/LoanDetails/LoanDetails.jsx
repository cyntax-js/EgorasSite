import React from "react";

import "../../css/loanDetails.css";

const LoanDetails = () => {
  return (
    <div>
      {/* hero section start */}
      <section className="heroSection">
        <div className="heroArea">
          <div className="heroTxts">
            <h1 className="heroTitle2">
              For Mrs. Eno Friday <br />
              Okon to improve her
              <br />
              <span className="restaurant">restaurant </span>
              business.
            </h1>

            <div className="heroButton">
              <a href="#" className="heroBtn">
                Learn more
                <div className="learnHover"></div>
              </a>
            </div>
          </div>

          <div className="hero-images">
            <img
              src="../img/loan-hero-img-right.svg"
              alt=""
              className="hero-right"
            />

            <div className="card-amount">
              <img src="../img/coin-icon.svg" alt="" className="coin" />
              <p className="amount">800,000</p>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

export default LoanDetails;
