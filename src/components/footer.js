import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                The Trinity Guide. We provide professional guided fly fishing experiences on the rivers located in California's Shasta County.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                Douglas City, California
                <br />
                United States of America
              </p>
              <p>P: <a href="tel:15303385734" title="Telephone Number">530-338-5734</a></p>
              <p>
                E: <a href="/contact-us">Contact Us</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/thetrinityguide/">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/thetrinityguide">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="widget disclaimer_widget">
              <h3 className="widget_title">Permit &amp; Rights</h3>
              <p><a href="/civil-rights-statement-and-permit-information/" title="Civil Rights And Permit Information">Civil Rights &amp; Permit</a></p>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">thetrinityguide.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
