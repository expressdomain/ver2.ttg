import React from "react";
import { Link } from "gatsby";

const CallToActionOne = ({ extraClassName, buttonClass }) => {
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 className="sec_title white">Let's Go Fishing!</h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <Link to="/contact-the-trinity-guide/" className={`common_btn ${buttonClass}`}>
              <span>Contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
