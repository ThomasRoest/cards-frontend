import React, { Component } from "react";
import Card from "../card";
import styled from "styled-components";
import { GlobalStyle } from "./style";

const StyledApp = styled.div`
  /* max-width: 960px; */
  /* margin: 0 auto; */
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class App extends Component<{}, {}> {
  public render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <CardContainer>
          <Card />
        </CardContainer>
      </StyledApp>
    );
  }
}

export default App;
