import React from "react"

import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

import {
  Container,
  Header,
  Card,
  Image
} from 'semantic-ui-react'

import "semantic-ui-less/semantic.less";

import awsLogo from "../images/aws.png";
import defaultLogo from "../images/logo.png";
import terraformLogo from "../images/terraform.png"

const logos = {
  aws: awsLogo,
  terraform: terraformLogo,
  default: defaultLogo,
}

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
                    provider
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
                      <Image floated='left' src={logos[meta.provider || 'default']} size='mini'/>
                      <Card.Header>{meta.title}</Card.Header>
                      <Card.Meta>
                        <strong>provider</strong>: {meta.provider}
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

