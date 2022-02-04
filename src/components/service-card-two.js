import React from "react";
import { Link } from "gatsby";

const ServiceCardTwo = ({ data }) => {
  const { url, iconName, title, title2, image } = data;
  return (
    <Link className="icon_box_1 text-center" to={url}>
      <div className="flipper">
        <div className="front">
          {/* <i className={iconName}></i> */}
          <div className="service_img mb-1618">
          <img src={image} alt="The Trinity Guide Co." />
          </div>
          <h3>{title}</h3>
        </div>
        <div className="back">
          { /*<i className={iconName}></i>*/ }
          <div className="service_img mb-1618">
          <img src={image} alt="The Trinity Guide Co." />
          </div>
          <h3>{title2}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardTwo;
