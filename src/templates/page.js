import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";


import "../assets/scss/wordpress-styles.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";


const pageConst = ({pageContext}) => (
				<MenuContextProvider>
					<SearchContextProvider>
						<Layout PageTitle="Services Page">
							<HeaderOne />
							<PageBanner title={pageContext.title} name={pageContext.title} />
							<section className="commonSection">
							<div className='container page-container'>
							<div className='page-container-content' dangerouslySetInnerHTML={{__html: pageContext.content}} />
							</div>
							</section>
							<Footer />
						</Layout>
					</SearchContextProvider>
				</MenuContextProvider>
);

export default pageConst







