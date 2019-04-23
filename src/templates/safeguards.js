import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import awsLogo from "../images/aws.png";
import defaultLogo from "../images/logo.png";
import terraformLogo from "../images/terraform.png"

import {
  Segment,
  Header,
  Grid,
  Image
} from 'semantic-ui-react'

const logos = {
  aws: awsLogo,
  terraform: terraformLogo,
  default: defaultLogo,
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  const meta = data.markdownRemark.frontmatter
  return (
    <Layout active='/safeguards'>
      <Grid>
        <Grid.Column width={2}>
          <Image src={logos[meta.provider || 'default']} size='medium'/>
        </Grid.Column>
        <Grid.Column width={14}>
          <Header as="h1">
            {meta.title}
            <Header.Subheader>{meta.description}</Header.Subheader>
          </Header>
          <div>provisioner: {meta.provisioner}</div>
          <div>provider: {meta.provider}</div>
          <div>source: <a href={meta.source}>{meta.source}</a> (<a href={meta.issues}>report an issue</a>)</div>
        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <div dangerouslySetInnerHTML={{ __html: html }}/>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            <Header as='h4'>Usage instructions</Header>
              

          </Segment>
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        source
        issues
        provider
        provisioner
      }
    }
  }
`