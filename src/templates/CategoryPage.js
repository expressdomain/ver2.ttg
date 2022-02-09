import React from "react";
import {Link, graphql} from "gatsby";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import {CategoriesList} from "../components/categories";


import "../assets/scss/wordpress-styles.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";


const TrinityGuideCatPage = ({pageContext, data}) => (
	<MenuContextProvider>
		<SearchContextProvider>
			<Layout PageTitle="Services Page">
				<HeaderOne />
				<PageBanner title={pageContext.title} name={pageContext.title} />
				<section className="commonSection">
					<CategoriesList />
					<div className="page-wrapper">
					
					
					
					<div className="post-list-wrapper">
						<h1>{pageContext.category}</h1>
						<ul>
							{data.allWpPost.edges.map((post, key) => (
								
								<li key={key}>
									<Link to={`/${post.node.slug}`}>
										<h3 className="post-title" dangerouslySetInnerHTML={{__html: post.node.title}} />
									</Link>
										<div className='page-container-content' dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
									
									
								</li>
								
							))}
							
							
						</ul>
					</div>
					</div>
					
					
					
					
				</section>
				<Footer />
			</Layout>
		</SearchContextProvider>
	</MenuContextProvider>
);

export default TrinityGuideCatPage

export const categoryPageQuery = graphql`
	query($category: String!) {
		 allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: $category }}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "MMM Do YYYY")
        excerpt
        slug
      }
    }
  }
	}
`







