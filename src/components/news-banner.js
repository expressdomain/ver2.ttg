import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h1`
	font-size: calc( 42px + (42 - 16)*(100vw - 400px)/(800 - 400));
	color: #ffffff;
`


const NewsBanner = () => {
  return (
    <section className="pageBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              <TitleStyle>
                Fishing News
              </TitleStyle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsBanner;
