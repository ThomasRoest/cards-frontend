import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    /* min-height: calc(100vh - 100px); */
    /* margin: 50px; */
    background-color: honeydew;
    letter-spacing: -1px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 5px 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
