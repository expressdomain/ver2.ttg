import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GravityFormForm from "gatsby-plugin-gravity-forms"
/*const ContactUs = () => {
	// Use useStaticQuery to get the form data for form 1.
	// There is no need to import the fragment ...GravityFormFields as this is
	// imported globally by the gatsby-plugin-gravity-forms plugin.
	const data = useStaticQuery(graphql`
     query formQuery {
      wpGravityFormsForm(formId: { eq: 1 }) {
        ...GravityFormFields
      }
    }
  `)
	
	// Then pass the data into the form component.
	return (
		<Layout>
			<p>Some intro text here</p>
			<GravityFormForm data={data} />
		</Layout>
	)
}

export default ContactUs
*/
