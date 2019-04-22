/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import MainMenu from "./main_menu"
import SEO from "./seo"

import {
  Container
} from 'semantic-ui-react'

import "./layout.css"

const Layout = ({ title, active, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
        <MainMenu active={active}/>
        <Container>
          <main>{children}</main>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
