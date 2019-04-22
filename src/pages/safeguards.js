import React from "react"

import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

import {
  Container,
  Header,
  Segment,
  Label,
  Button
} from 'semantic-ui-react'

import "semantic-ui-less/semantic.less";

const IndexPage = () => (
  <Layout active={'/safeguards'}>
    <StaticQuery
      query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    provisioner
                    path
                    id
                  }
                }
              }
            }
          }
      `}
      render={data => (
        <>
          <Container>
            <Header as="h1">Safeguards</Header>
            {data.allMarkdownRemark.edges.map((edge) => {
              const meta = edge.node.frontmatter
              return(
                <Segment key={meta.id}>
                  <Header as="h2">
                    {meta.title}
                  </Header>
                  <Label as='a' color='purple' ribbon>
                    {meta.provisioner}
                  </Label>
                  <div><strong>ID</strong>: {meta.id}</div>
                  <Button primary>Try</Button>
                </Segment>)
            })}
          </Container>
        </>
      )}
    />
  </Layout>
)

export default IndexPage

