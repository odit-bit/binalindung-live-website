import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Styled from "styled-components"

import SEO from "../component/seo"

const ContentStyle = Styled.div`

`

const BlogPost = ({ data }) => {
  const post = data.allContentfulPost.edges[0].node
  //   console.log(post.photo.fluid.src)
  return (
    <ContentStyle>
      <SEO title={post.judul} />
      <h1>{post.judul}</h1>

      <Img fixed={post.photo.fixed}></Img>

      <p>{post.deskripsi.deskripsi}</p>
      {/* <p>{post.tanggal}</p> */}
      {/* <p>{post.id}</p> */}
    </ContentStyle>
  )
}
export default BlogPost

export const query = graphql`
  query($slug: String!) {
    allContentfulPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          judul
          deskripsi {
            deskripsi
          }
          photo {
            fixed(width: 300) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
