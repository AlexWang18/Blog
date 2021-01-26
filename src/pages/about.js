import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"


export default function About({data}) {
  return (
    <Layout>
      <div>
        <Link to="/">Home</Link>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
          Using Gatsby is cool with all its plugins and under the hood powers.
        </p>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata{
        title
      }
    }
  }
`