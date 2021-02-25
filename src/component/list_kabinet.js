import React from "react"
import Img from "gatsby-image"

// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import Figure from "react-bootstrap/Figure"

const ListKabinet = ({ imageData, nama, jabatan }) => {
  return (
    <Figure>
      <Img fixed={imageData} />
      <h5>{nama}</h5>
      <caption>{jabatan} </caption>
    </Figure>
  )
}

export default ListKabinet
