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

import "./layout.css.less"

const Layout = ({ title, active, children, contained }) => (
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
      <div className='main'>
        <SEO title={title || 'Safeguards'} keywords={[`gatsby`, `application`, `react`]} />
        <MainMenu active={active}/>
        {contained &&
          <Container>
            <main>{children}</main>
          </Container>
        }
        {!contained && 
          children
        }
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contained: PropTypes.bool,
}

Layout.defaultProps = {
  contained: true,
}

export default Layout
