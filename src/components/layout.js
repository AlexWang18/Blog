import React from "react"
//import { css } from "@emotion/react"
import { Link, graphql, useStaticQuery } from "gatsby"
//import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  
  /*const data = useStaticQuery(
    // similar to hooks? was getting error
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  ) */

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Link to={`/`}>
        <h3>Home</h3>
      </Link>
      <h2 style={{ textAlign: "left", color: "eee" }}>{/*data.site.siteMetadata.title*/}Alex's Site</h2>
      {children}
    </div>
  )
}
