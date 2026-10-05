import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  cream: '#FFF8F2',
  peach: '#FFEBD9',
  white: '#FFFFFF',
  gold: '#FFB800',
  overlay: 'rgba(0, 0, 0, 0.78)'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    background: ${colors.cream};
    color: ${colors.salmon};
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body.modal-open {
    overflow: hidden;
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
  }

  .container {
    width: min(1024px, calc(100% - 32px));
    margin: 0 auto;
  }
`
