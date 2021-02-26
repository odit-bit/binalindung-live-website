import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Styled from "styled-components"

import ListKabinet from "../component/list_kabinet"
import SEO from "../component/seo"

import Container from "react-bootstrap/Container"
// import Figure from "react-bootstrap/Figure"
import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import Img from "gatsby-image"

const PengurusStyle = Styled.div`
  div.row {
    display: flex;
    justify-content: center;
  }
  figure.figure {
    margin:20px;
  }
  caption {
    padding:0;
  }

`

const Kabinet = () => {
  const data = useStaticQuery(graphql`
    {
      allKetuaJson {
        edges {
          node {
            jabatan
            nama
            image {
              childImageSharp {
                fixed(height: 160, width: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      allSekbenJson {
        edges {
          node {
            id
            jabatan
            nama
            image {
              childImageSharp {
                fixed(height: 100, width: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      allKobidJson {
        edges {
          node {
            id
            jabatan
            nama
            image {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  const ketua = data.allKetuaJson.edges[0].node
  const sekben = data.allSekbenJson.edges
  const kobid = data.allKobidJson.edges

  return (
    <PengurusStyle>
      <SEO title="Kabinet" />
      <Container className="content">
        <Row>
          <ListKabinet
            key={ketua.id}
            nama={ketua.nama}
            jabatan={ketua.jabatan}
            imageData={ketua.image.childImageSharp.fixed}
          />
        </Row>
        <Row key={sekben.id}>
          {sekben.map(({ node: sekben }) => {
            return (
              <ListKabinet
                nama={sekben.nama}
                jabatan={sekben.jabatan}
                imageData={sekben.image.childImageSharp.fixed}
              />
            )
          })}
        </Row>
        <Row key={kobid.id}>
          {kobid.map(({ node: kobid }) => {
            return (
              <ListKabinet
                key={kobid.id}
                nama={kobid.nama}
                jabatan={kobid.jabatan}
                imageData={kobid.image.childImageSharp.fixed}
              />
            )
          })}
        </Row>
      </Container>
    </PengurusStyle>
  )
}

export default Kabinet

/*
 */
