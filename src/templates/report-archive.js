import React from "react";
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

const FeaturedImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 21em;
  display: block;
  margin: 16px auto;
  object-fit: cover;
`


const reportArchiveConst = ({pageContext}) => (
	<MenuContextProvider>
		<SearchContextProvider>
			<Layout PageTitle="Reports Page">
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
);

export default reportArchiveConst







