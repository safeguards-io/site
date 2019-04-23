import React from "react"

import Layout from "../components/layout"
import { StaticQuery, graphql, Link } from "gatsby"

import {
  Container,
  Header,
  Card,
  Label
} from 'semantic-ui-react'

import "semantic-ui-less/semantic.less";

const IndexPage = () => (
  <Layout active='/safeguards' title="Registry">
    <StaticQuery
      query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    id
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
            <Header as="h1">
              Registry
              <Header.Subheader>List of all available safeguards.</Header.Subheader>
            </Header>
            <Card.Group itemsPerRow={3}>
              {data.allMarkdownRemark.edges.map((edge) => {
                const meta = edge.node.frontmatter
                return(
                  <Card key={meta.id} href={meta.path}>
                    <Card.Content>
                      <Card.Header>
                      <Label attached='top right' color='purple'> terraform</Label>
                        {meta.title}
                      </Card.Header>
                      <Card.Meta>
                        {meta.id}
                      </Card.Meta>
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

