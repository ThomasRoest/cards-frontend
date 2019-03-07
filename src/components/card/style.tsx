import styled from "styled-components";

export const NotesSection = styled.section``;

export const TodoSection = styled.section``;

export const CardHeader = styled.header`
  margin-bottom: 1rem;
`;

export const Cardbody = styled.div``;

export const CardFooter = styled.footer``;

export const TitleInput = styled.input`
  font-weight: 700;
  background-color: transparent;
  border: 0px;
  outline: 0px;
`;

export const Note = styled.div`
  display: flex;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
  padding: 0.3rem;
`;

export const StyledCard = styled("div")<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  flex: 0 1 300px;
  padding: 0.5rem;
  margin: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  align-self: flex-start;
`;
