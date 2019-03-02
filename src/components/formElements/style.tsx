import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  color: blue;
  display: flex;
  align-items: center;
  line-height: 1.4;

  &:hover {
    color: green;
  }

  > div {
    margin-left: -6px;
    margin-right: 6px;
  }

  > a {
    text-decoration: none;
    color: blue;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    position: relative;
    padding-bottom: 0px;
    transition: 1s ease;

    &:hover {
      border-bottom: 2px solid blue;
      padding-bottom: 2px;
      transition: all 1s ease;
    }
  }
`;
