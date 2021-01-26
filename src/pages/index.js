import { Link } from "gatsby"
import React from "react"

import Layout from '../components/layout'

const Home = props => {
  return (
    <Layout>
    
      <div style={{ color: "purple", fontSize: "72px" }}>
        <h3>Hello Gatsby!</h3>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      <div>
        <p>This is my dummy site</p>
        <ul>
        </ul>
        <Link to = "/about/">About</Link>
        <hr></hr>
        <Link to = "/contact/">Contact</Link>
        <hr></hr>
        <Link to = "/my-files">Files</Link>
      </div>
    </Layout>
  )
}

export default Home
