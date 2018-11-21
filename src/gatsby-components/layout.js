import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './base.css'

import Menu from './Menu'

const Global = styled.div`
  display: flex;
  align-content: stretch;
  height: 100vh;
  overflow: hidden;
`

const Main = styled.main`
  flex: 1;
  overflow: auto;
`

const MenuContainer = styled.main`
  border-right: solid 1px #f5f5f5;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Global>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <MenuContainer>
          <Menu
            siteTitle={data.site.siteMetadata.title}
            data={{
              directoryTree: data.directoryTree,
              allMarkdownRemark: data.allMarkdownRemark,
            }}
          />
        </MenuContainer>
        <Main>{children}</Main>
      </Global>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    directoryTree(path: { eq: "src/pages" }) {
      path
      name
      type
      childrenNode {
        path
        name
        type
        childrenNode {
          path
          name
          type
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            order
          }
          fields {
            slug
            fileName {
              name
              base
              relativePath
              extension
            }
          }
          excerpt
        }
      }
    }
  }
`