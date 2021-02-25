import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Normalize } from "styled-normalize"

const mainTheme = {
  color: {
    background: "#e7e4e3",
    text: "black",
    social_media_icons: "#b9b9b9",
  },
  fonts: {
    header: "Montserrat",
    copy: "source Sans pro",
  },
}

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text};
        // font-family: ${({ theme }) => theme.fonts.copy}, sans-serif; 
    }

    h1,h2,h3 {
        // font-family: ${({ theme }) => theme.fonts.header}, sans-serif;
    }
`

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Normalize />
      {children}
    </ThemeProvider>
  )
}

export default Theme
