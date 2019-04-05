import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import {
  Button,
  Container,
  Segment,
  Header,
  Icon
} from 'semantic-ui-react'

import "semantic-ui-less/semantic.less";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Header as="h1">Hi</Header>
      <Button primary basic>
        <Icon name='plus' />
        add
      </Button>
      <Segment>Test</Segment>
    </Container>
    
  </Layout>
)

export default IndexPage
