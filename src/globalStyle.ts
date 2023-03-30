import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
  .no-scroll {
    @media only screen and (max-width: 1024px) {
      overflow: hidden;
    }
  }
`
