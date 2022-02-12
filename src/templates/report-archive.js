import React from "react";
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import styled from 'styled-components';

import "../assets/scss/wordpress-styles.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";
import {CategoriesList} from "../components/categories";
import {graphql} from "gatsby";

const FeaturedImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 21em;
  display: block;
  margin: 16px auto;
  object-fit: cover;
`


const reportArchiveConst = ({pageContext, data: { wpReport }}) => (
	<>
		<Seo post={wpReport} />
		<MenuContextProvider>
			<SearchContextProvider>
				<Layout PageTitle="Fishing Reports - The Trinity Guide Co.">
					<HeaderOne />
					<PageBanner title={pageContext.title} name={pageContext.title} />
					<section className="commonSection">
						<div className="report-wrapper">
						<div className='container page-container'>
							
							<div className="container featured-image">
							<FeaturedImage src={pageContext.featuredImage.node.sourceUrl} />
							</div>
							
							<div className='page-container-content' dangerouslySetInnerHTML={{__html: pageContext.content}} />
						</div>
						</div>
					</section>
					<section className="commonSection category-chiclet-wrapper">
						<CategoriesList />
					</section>
					<Footer />
				</Layout>
			</SearchContextProvider>
		</MenuContextProvider>
		</>
);

export default reportArchiveConst

export const reportQuery = graphql`
	query GET_REPORT_POST($id: String!) {
        wpReport(id: { eq: $id }) {
            nodeType
            title
            uri
            seo {
                title
                metaDesc
                focuskw
                metaKeywords
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                canonical
                cornerstone
                schema {
                    articleType
                    pageType
                    raw
                }
            }
        }
    }
`;








