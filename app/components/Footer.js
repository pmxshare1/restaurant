import React from "react";
import { FaTwitter, FaMeta, FaGooglePlus, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                &copy; All Rights Reserved | Horla Adjornor
              </div>
            </div>
            <div className="row">
              <div className="col">Tel: +233 26 000000</div>
            </div>
          </div>
          <div className="col footer-address">
            <address>
              P. O. Box 444,
              <br />
              Sakumono Estate, <br />
              Tema-Accra <br />
              Ghana, West-Africa
            </address>
          </div>
          <div className="col social-icons">
            <FaTwitter />
            <FaGooglePlus />
            <FaMeta />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
