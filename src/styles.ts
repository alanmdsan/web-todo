import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Noto Sans', sans-serif;
  }

  body {
    background-color: #faf0ca;
  }
`
export default EstiloGlobal
