import React from "react"
import Styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import Footer from "./footer"

import Paper from "@material-ui/core/Paper"
import { Container } from "react-bootstrap"

const LayoutStyle = Styled.div`
display: flex;
flex-direction: column;
flex: 1;
justify-content: space-between;
position: relative;
max-width: 1080px;
margin: 0 auto; 
min-height: 100vh

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
      <LayoutStyle>
        <Header />
        <Paper elevation={0}>
          <Container>
            <main>{children}</main>
          </Container>
        </Paper>
        <Footer />
      </LayoutStyle>
    </React.Fragment>
  )
}

export default Layout
