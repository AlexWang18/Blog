import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"

const Home = props => {
  if (props.data) console.log(props.data)
  return (
    <Layout>
      <div style={{ color: "purple", fontSize: "72px" }}>
        <h3>Hello Gatsby!</h3>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      <div>
        <p>This is my dummy Blog site</p>
        <h4>{props.data.allMarkdownRemark.totalCount}Posts</h4>
        <ul>
          {props.data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title} <span>-- {node.frontmatter.date}</span>
              </h3>
            </div>
          ))}
        </ul>
        <Link to="/about/">About</Link>
        <hr></hr>
        <Link to="/contact/">Contact</Link>
        <hr></hr>
        <Link to="/my-files">Files</Link>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default Home
