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
            <div id="mc_embed_signup">
            <form action="https://gmail.us3.list-manage.com/subscribe/post?u=b61e2eb5f241dbe27bea34345&amp;id=1239cb6c1b" method="post" className="validate subscribefrom about-page-subscribe" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
              <input type="email" placeholder="Enter your email here, then Sign Up >" name="EMAIL" className="email" id="mce-EMAIL" required />
              <button className="common_btn red_bg about-sub-btn" type="submit" name="submit">
                <span>Sign Up!</span>
              </button>
            </form>
            </div>
            <div className="card subscribe-feat-list">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">We Deliver -> Fishing Reports</li>
                  <li className="list-group-item">We Deliver -> Tips &amp; Tactics</li>
                  <li className="list-group-item">We Deliver -> Seasonal Insights &amp; Plans</li>
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
