import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  min-height: 100vh;
`;

export const StyledApp = styled.div`
  background-color: aliceblue;
  min-height: 100vh;
`;

export const AddnewcardButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
`;
