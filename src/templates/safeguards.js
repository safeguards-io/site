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
  Image,
  Divider,
  Icon
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
    <Layout active='/safeguards' title={meta.title}>
      <Grid>
        <Grid.Column width={2}>
          <Image src={logos[meta.provider || 'default']} size='medium'/>
        </Grid.Column>
        <Grid.Column width={14}>
          <Header as="h1">
            <Header.Subheader href='/safeguards'><Icon name='angle left'/>Registry</Header.Subheader>
            {meta.title}
            <Header.Subheader>{meta.description}</Header.Subheader>
          </Header>
          <div>provisioner: <strong>{meta.provisioner}</strong></div>
          <div>provider: <strong>{meta.provider}</strong></div>
          <div>source: <a href={meta.source}>{meta.source}</a> (<a href={meta.issues}>report an issue</a>)</div>
        </Grid.Column>
      </Grid>
      <Divider />
      <Grid>
        <Grid.Column width={10}>
          <Header as="h2">Readme</Header>
          <Segment>
            <div dangerouslySetInnerHTML={{ __html: html }}/>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h2'>Usage</Header>
          <Segment>
            Create a file called <code>.safeguards.yml</code> in  your working directory which
            contains your terraform configuration. Add this content:
            <pre style={{backgroundColor: '#F8F8F8', padding: '5px', border: 'solid 1px #DDDDDD', overflow:'auto'}}><code>

{`
  - name: my policy
    safeguard: ${meta.id}
    settings:
    # settings from readme`}
            </code></pre>
            Now you can check that your terraform configuration complies with this policy by
            running:
            <pre style={{backgroundColor: '#F8F8F8', padding: '5px', border: 'solid 1px #DDDDDD'}}><code>{`npx @safeguards/safeguards`}</code></pre>
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
        id
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