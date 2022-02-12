import React from "react";
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

import "../assets/scss/wordpress-styles.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";
import {CategoriesList} from "../components/categories";
import {graphql} from "gatsby";


const pageConst = ({pageContext, data: { wpPage } }) => (
	<>
		<Seo post={wpPage} />
				<MenuContextProvider>
					<SearchContextProvider>
						<Layout PageTitle={pageContext.title}>
							<HeaderOne />
							<PageBanner title={pageContext.title} name={pageContext.title} />
							<section className="commonSection">
								<div className="page-wrapper">
									<div className='container page-container'>
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

export default pageConst

export const pageQuery = graphql`
	query GET_PAGE($id: String!) {
        wpPage(id: { eq: $id }) {
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





