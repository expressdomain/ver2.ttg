import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/reports-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import {Link} from 'gatsby';
import styled from "styled-components";

import "../assets/scss/wordpress-styles.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

const Pagination = styled.div`
	display: flex;
	justify-content: flex-end;
`
const PageNumberWrapper = styled.div`
	border: 1px solid #eeeeee;
	background : ${props => props.isCurrentPage ? '#eeeeee' : '#ffffff'}
`
const PageNumber = styled(Link)`
	display: block;
	padding: 8px 16px;
`

const FeaturedImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 8em;
  display: block;
  margin: 0 auto 16px auto;
  object-fit: cover;
`

const reportConst = ({pageContext}) => (
	<MenuContextProvider>
		<SearchContextProvider>
			<Layout PageTitle="News">
				<HeaderOne />
				<PageBanner title={pageContext.title} name={pageContext.title} />
				<section className="commonSection mb-1618">
					{pageContext.posts.map(post =>(
						<div key={post.node.id} className="container">
							<Link to={`/fishing-report/${post.node.slug}`}>
							<h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
							</Link>
							<small>
								{post.node.date}
							</small>
							
							<div className="container featured-image mb-1618">
								<div className="row align-items-center">
									<div className="col-md-4">
										<FeaturedImage src={post.node.featuredImage.node.sourceUrl} />
									</div>
									<div className="col-md-8">
							   <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
									</div>
								</div>
							</div>
							{/*
							<Link to={`/${post.node.slug}`}>
								Read more...
							</Link>
							*/}
							
						</div>
					))}
					
					<Pagination className="container">
						{Array.from({length: pageContext.numberOfPages}).map((page, index) =>(
							<PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage} >
								<PageNumber to={index === 0 ? '/fishing-report' : `/fishing-report/${index + 1}`}>
									{index + 1}
								</PageNumber>
							
							</PageNumberWrapper>
						))}
					</Pagination>
				
				
				
				</section>
				<Footer />
			</Layout>
		</SearchContextProvider>
	</MenuContextProvider>


);

export default reportConst
