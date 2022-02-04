import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  return (
    <section className="commonSection subscribe">
      <Container>
        <Row>
          <Col lg={4}>
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title">{sectionContent.title}</h2>
          </Col>
          <Col lg={8}>
            <form action="" method="post" className="subscribefrom about-page-subscribe">
              <input type="email" placeholder="Enter your email" name="email" />
              <button className="common_btn red_bg about-sub-btn" type="submit" name="submit">
                <span>Subscribe now</span>
              </button>
            </form>
            <div className="card subscribe-feat-list">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Fishing Reports</li>
                  <li className="list-group-item">Tips &amp; Tactics</li>
                  <li className="list-group-item">Seasonal Insights &amp; Plans</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeForm;
