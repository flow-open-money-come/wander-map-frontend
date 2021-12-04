import { createGlobalStyle } from 'styled-components'
import '@fontsource/source-sans-pro'

export const ResetStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike,  sub, sup, tt, var, b, u, center, dl, dt, dd, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  address, caption, cite, code, dfn, em,  th, var, b {
    font-weight: normal;
    font-style: normal;
  }
  abbr, acronym {
    border: 0;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
  }
  body {
      line-height: 1;
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
  }
  
  q {
    quotes: none;
  }

  q {
    &:before,   &:after {
      content: '';
      content: none;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  caption, th {
    text-align: left;
  }
  textarea {
    resize: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    padding: 0;
    border: none;
    background: none;
  }
`

export const GlobalStyle = createGlobalStyle`
  html * {
    box-sizing: border-box;
    font-family: Source Sans Pro;
    letter-spacing: 0.05rem;
  }
`
