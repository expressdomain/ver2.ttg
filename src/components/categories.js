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
		<div className="categories">
			<ul>
				<li>
					<Link to="/">
						All Posts
					</Link>
				</li>
					{
						edges.map((category, key) => (
							<li key={`key`}>
								<Link to={`/category/${category.node.slug}`}>
									{category.node.name}
								</Link>
							</li>
						))
					}
				
			</ul>
		</div>
	)
}
