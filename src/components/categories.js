import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

const useGetCategories = () => {
	const categories = useStaticQuery(graphql`
			query {
					allWpCategory {
		    edges {
		      node {
		        id
		        name
		        slug
		      }
		    }
		  }
			}
	`)
	return categories.allWpCategory
}

export const CategoriesList = () => {
	const { edges } = useGetCategories()
	
	return (
		<div className="container-fluid">
			<div className="row justify-content-center flex-row">
					{
						edges.map((category, key) => (
							
							<div className="ml-1 mr-1 mt-1 mb-1 col-lg-1 col-md-2 col-sm-3 col-xs-6 category-chiclet align-items-center justify-content-center d-flex" key={`key`}>
								<Link className="d-flex justify-content-center align-items-center" to={`/category/${category.node.slug}`}>
									{category.node.name}
								</Link>
							</div>
						
						))
					}
			</div>
		</div>
	)
}
