import React from "react";
import { Twitter, Facebook, YouTube, Instagram } from "@material-ui/icons";

import "../../../css/footer.css";
import "../../../css/footerMobile.css";

const Footer = () => {
  return (
    <div>
      <section className="footerSection">
        <div className="footerArea">
          <div className="footerCard1">
            <a href="#">
              {" "}
              <img
                src="../img/egoras-logo.svg"
                alt="..."
                className="egr2-logo"
              />
            </a>
            <div className="footerIcons">
              <a href="" className="twitter">
                <Twitter />
              </a>
              <a href="" className="twitter">
                <Facebook />
              </a>
              <a href="" className="twitter">
                <Instagram />
              </a>
              <a href="" className="twitter">
                <YouTube />
              </a>
            </div>
          </div>

          <div className="footerCard2">
            <div className="footerCardTitle">General</div>
            <div className="footerLinks">
              <a href="#" className="c1link1 a">
                Home
              </a>
              <a href="" className="c1link1">
                Explore loans
              </a>
              <a href="" className="c1link1">
                Documentation
              </a>
              <a href="" className="c1link1">
                Pitch Deck
              </a>
            </div>
          </div>

          <div className="footerCard2">
            <div className="footerCardTitle">About Us</div>
            <div className="footerLinks">
              <a href="#" className="c1link1 a">
                How it works
              </a>
              <a href="" className="c1link1">
                Our team
              </a>
              <a href="" className="c1link1">
                Stories
              </a>
              <a href="" className="c1link1">
                Token metrics
              </a>
            </div>
          </div>

          <div className="footerCard2">
            <div className="footerCardTitle">Legal</div>
            <div className="footerLinks">
              <a href="#" className="c1link1 a">
                Privacy policy
              </a>
              <a href="" className="c1link1">
                Terms & conditions
              </a>
              <a href="" className="c1link1">
                Partners
              </a>
              <a href="" className="c1link1">
                Contact
              </a>
            </div>
          </div>

          <div className="footerCard2">
            <div className="footerCardTitle">Contact Us</div>
            <div className="footerLinks">
              <a href="#" className="c1link1 a">
                Get in Touch Today
              </a>
              <a href="" className="c1link1">
                880.123.4567
              </a>
              <a href="" className="c1link1">
                Documentation
              </a>
              <a href="" className="c1linklast">
                info@egoras.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
