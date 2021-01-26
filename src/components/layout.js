import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
//import { rhythm } from "../utils/typography"

export default function layout({ children }) {
  return (
    <div
         style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
    >
      <Link to={`/`}>
        {/* <h3 
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Home
        </h3> */}
      </Link>
      <h2 style={{ "text-align": "left", color: "eee" }}>Shared Title</h2>
      {children}
    </div>
  )
}
