import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import "semantic-ui-less/semantic.less";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="ui container">
      <div>Hi</div>
    </div>
  </Layout>
)

export default IndexPage
