import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Container,
  Segment,
  Header
} from 'semantic-ui-react'

import "semantic-ui-less/semantic.less";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Header as="h1">Safeguards</Header>
      What else can I say?
    </Container>
  </Layout>
)

export default IndexPage
