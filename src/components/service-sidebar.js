import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Services</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="#">The Trinity Guide</a>
            </li>
            <li>
              <a href="#">Guided Fly Fishing</a>
            </li>
            <li>
              <a href="#">Casting Instruction</a>
            </li>
            <li>
              <a href="#">Fly Tying Instruction</a>
            </li>
            <li>
              <a href="#">News, Reports</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>need help?</h4>
          <p>
            Prefer speaking a guide? call us and we will connect you with a guide who can help.
          </p>
          <h2>123 456 7890</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
