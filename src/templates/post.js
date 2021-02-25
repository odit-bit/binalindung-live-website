import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
  const post = data.allContentfulPost.edges[0].node
  //   console.log(post.photo.fluid.src)
  return (
    <div>
      <h1>{post.judul}</h1>
      <br></br>
      <p>{post.id}</p>
      <br></br>
      <p>{post.deskripsi}</p>
      <br></br>
      <p>{post.tanggal}</p>
      <br></br>
      <Img fluid={post.photo.fluid}></Img>
    </div>
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
          deskripsi
          tanggal
          photo {
            fluid(maxWidth: 300, quality: 50) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
