import React from "react";
import serviceS1 from "@/images/s1.jpg";
import serviceS2 from "@/images/s2.jpg";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Casting Instruction</h2>
      <p>
        Need something changed or is there something not quite working the way
        you envisaged? Is your fly rod a little old and tired and need responding?
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Guided trip planning & strategy</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>Research your river
            </li>
            <li>
              <i className="fa fa-check-square"></i>Guided fly fishing rates
            </li>
            <li>
              <i className="fa fa-check-square"></i>Need to change your plan?
            </li>
            <li>
              <i className="fa fa-check-square"></i>How we help you have more fun
            </li>
            <li>
              <i className="fa fa-check-square"></i>Our job is to support you and your fly fishing goals
            </li>
          </ul>
        </div>
      </div>
      <p>
        Looking for more fun or is there something not quite right in the way your fishing is working? Is your fly rod a little old and tired and in need of replacement?
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
};

export default ServiceDetailsContent;
