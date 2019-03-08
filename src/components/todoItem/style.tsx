import styled from "styled-components";

export const StyledTodoItem = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 10px;
  padding: 0 0 0 5px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`;

export const TextInput = styled("input")<{ completed: boolean }>`
  flex: 1;
  border: 0px;
  outline: 0px;
  padding: 2px;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
  color: ${props => (props.completed ? "grey" : "none")};
  &:focus {
    outline: 1px solid lightblue;
  }
`;

export const DeleteTodoButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: #fff;
  border: 0.05rem solid lightgrey;
  border-radius: 0.1rem;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8rem;
  height: 1.8rem;
  line-height: 1.2rem;
  outline: 0;
  padding: 0.25rem 0.4rem;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  &:hover {
    background-color: cornflowerblue;
    color: white;
  }
`;
