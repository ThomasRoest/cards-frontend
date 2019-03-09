import styled from "styled-components";

export const NotesSection = styled.section``;

export const TodoSection = styled.section``;

export const CardHeader = styled.header`
  margin-bottom: 1rem;
`;

export const DeleteNoteButton = styled.button`
  appearance: none;
  border: 0px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: orange;
    transition: background-color 0.5s ease;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  flex: 1 0 10%;
`;

export const TextArea = styled.textarea`
  -webkit-appearance: none;
  appearance: none;
  outline: 0px;
  border: 0px;
  width: 100%;
  overflow: auto;
  resize: none;
`;

export const Cardbody = styled.div``;

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .btn-link {
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
    a {
      color: #000;
    }
  }

  .btn-delete {
    font-weight: 400;
    text-transform: lowercase;
    svg {
      fill: grey;
    }
  }
`;

export const TitleInput = styled.input`
  font-weight: 700;
  background-color: transparent;
  border: 0px;
  outline: 0px;
`;

export const Note = styled.div`
  /* min-height: 20px; */
  padding: 5px;
  display: flex;
  /* margin-bottom: 20px; */
  background-color: white;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);

  /* display: flex;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
  padding: 0.3rem; */
`;

export const StyledCard = styled("div")<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  flex: 0 0 300px;
  padding: 0.5rem;
  margin: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  align-self: flex-start;
`;
