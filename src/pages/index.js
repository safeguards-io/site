import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Header
} from 'semantic-ui-react'

import "semantic-ui-less/semantic.less";

const IndexPage = () => (
  <Layout active='/'>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header as="h1">Safeguards</Header>
    What else can I say?
  </Layout>
)

export default IndexPage
