import React from "react"
import Styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Typography from "@material-ui/core/Typography"

// import { graphql } from 'gatsby'

const FooterStyle = Styled.div`
    footer {
        text-align: center ;
        padding: 1rem;
    }
    .icons {
        display: inline-grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 10px;
      }
    .icons svg {
        width: 60;
        heigth: 60;
        color: ${({ theme }) => theme.color.social_media_icons};
      }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
            youtube
          }
        }
      }
    }
  `)
  return (
    <FooterStyle>
      <footer>
        <div className="icons">
          <a
            aria-label="instagram-link"
            href={data.site.siteMetadata.social.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            aria-label="youtube-link"
            href={data.site.siteMetadata.social.youtube}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <Typography>Sekretariat Rw-11 Binalindung</Typography>
        <Typography variant="body2" color="textSecondary">
          {"Copyright © "}
          <span>Gema Adhi Wibowo</span> {new Date().getFullYear()}
          {"."}
        </Typography>
      </footer>
    </FooterStyle>
  )
}

export default Footer
