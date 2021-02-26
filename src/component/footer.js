import React from "react"
import Styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Typography from "@material-ui/core/Typography"

const FooterStyle = Styled.footer`
background: #52b788 ;
  footer {
    // margin-top: auto;
    text-align: center ;
    padding: 1rem;  

  }
  .icons {
      display: inline-grid;
      grid-template-columns: repeat(3, auto);
      grid-gap: 10px;
    }
  .icons svg {
      width: 120;
      heigth: 120;
      color: ${({ theme }) => theme.color.social_media_icons};
      :hover {
            color: #06d6a0 ;
            // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }
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
        <Typography></Typography>
        <Typography variant="body2" color="textSecondary">
          {/* {"Copyright © "} */}
          <span>Sekretariat Rw-11 Binalindung</span>
          {"."}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary">
          {"Copyright © "}
          <span>Gema Adhi Wibowo</span> {new Date().getFullYear()}
          {"."}
        </Typography> */}
      </footer>
    </FooterStyle>
  )
}

export default Footer
