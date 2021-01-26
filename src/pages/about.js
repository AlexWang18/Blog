import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <div>
        <Link to="/">Home</Link>
        <h1>About</h1>
        <p>
          Using Gatsby is cool with all its plugins and under the hood powers.
        </p>
      </div>
    </Layout>
  )
}
