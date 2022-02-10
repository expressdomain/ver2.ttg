import React from "react";
import {Link, graphql} from "gatsby";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/category-banner";
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
				<PageBanner title={pageContext.category} name={pageContext.category} />
				<section className="commonSection">
					<div className="page-wrapper">
					
					<div className="post-list-wrapper">
						<ul>
							{data.allWpPost.edges.map((post, key) => (
								<li key={key}>
									<Link to={`/${post.node.slug}`}>
										<h3 className="post-title" dangerouslySetInnerHTML={{__html: post.node.title}} />
									</Link>
									<small dangerouslySetInnerHTML={{__html: post.node.date}} />
										<div className='page-container-content' dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
								</li>
							))}
						</ul>
					</div>
					</div>
					
				</section>
				<section className="commonSection">
					<CategoriesList />
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







