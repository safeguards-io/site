import React from "react"

import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

import {
  Container,
  Header,
  Card
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
                    description
                    path
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
            <Card.Group itemsPerRow={3}>
              {data.allMarkdownRemark.edges.map((edge) => {
                const meta = edge.node.frontmatter
                return(
                  <Card key={meta.id} raised>
                    <Card.Content>
                      <Card.Header>{meta.title}</Card.Header>
                      <Card.Meta>{meta.provisioner}</Card.Meta>
                      <Card.Description>{meta.description}</Card.Description>
                    </Card.Content>
                  </Card>)
              })}
            </Card.Group>
          </Container>
        </>
      )}
    />
  </Layout>
)

export default IndexPage

