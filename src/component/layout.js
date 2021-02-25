import React from "react"
import Styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import Footer from "./footer"

import Paper from "@material-ui/core/Paper"

const LayoutStyle = Styled.div`
    margin:0 auto;
    max-width: 1200px;
    min-height: 100vh;
    // display: grid;
    // padding: 1rem;
    // justify-content: center;
    // grid-template-rows: auto 1fr auto;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <React.Fragment>
      <header>
        <LayoutStyle>
          <Header />
          <Paper elevation={0}>
            <main>{children}</main>
          </Paper>
          <Footer />
        </LayoutStyle>
      </header>
    </React.Fragment>
  )
}

export default Layout
