import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const MyFiles = ({ data }) => {
  if (data) console.log({ data })
  return (
    <Layout>
      <div>
        <h3>My Site's Files</h3>
        <table>
          <thead>
            <tr> 
                {/* columns */}
              <th>relativePath</th>  
              <th>prettySize</th>
              <th>extension</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default MyFiles

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
