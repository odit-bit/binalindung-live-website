import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

// import Img from "gatsby-image"
import Styled from "styled-components"
import { Navbar } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"

const HeaderStyle = Styled.header`
    background: #ffffff ;
    nav ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        // grid-template-columns: repeat(4, auto) ;
        // justify-content: space-between;
        // @media (min-width: 768px ) {
        //     grid-template-columns: 1fr repeat(3, auto) ;
        // }
    }
    nav ul li a {
        // display: inline-block;
        // padding: 1rem;
        margin-right: 1.3rem;
        font-size: .9rem;
        text-decoration: none;
        // color: ${({ theme }) => theme.color.text};
        color: #2b331f ;
        :hover {
            color: #06d6a0 ;
            // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }
    }
`
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "Binalindung512.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            src
          }
        }
      }
    }
  `)

  return (
    <HeaderStyle>
      <header>
        <Navbar bg="#bbc8ba" expand="lg">
          <Navbar.Brand>
            {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
            <img
              alt=""
              src={data.file.childImageSharp.fixed.src}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            BINALINDUNG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item as="ul">
                <li>
                  <Link to="/">Beranda</Link>
                </li>
                <li>
                  <Link to="/kabinet/">Kabinet</Link>
                </li>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </HeaderStyle>
  )
}

export default Header
