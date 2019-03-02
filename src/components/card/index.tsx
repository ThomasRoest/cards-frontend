import React from "react";
import styled from "styled-components";
import { Checkbox } from "../formElements";
import TodoList from "../todolist";

const StyledCard = styled.div`
  background-color: white;
  flex: 0 1 300px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  align-self: flex-start;
`;

// const CheckBox = styled.input`
//   width: 5%;
// `;

// interface InputProps {
//   completed?: boolean;
// }

// const Input = styled.input`
//   flex: 1 0 auto;
//   text-decoration: ${(props: InputProps) =>
//     props.completed ? "line-through" : "none"};
//   font-size: 1rem;
// `;

const CardHeader = styled.header``;

const Cardbody = styled.div``;

// const ListItem = styled.li`
//   display: flex;
// `;

interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

// interface State {
//   value: string;
//   todoItems: TodoItem[];
// }

interface Props {
  title: string;
  deleteCard: (id: number) => void;
  cardId: number;
}

class Card extends React.Component<Props, {}> {
  // public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({ value: event.target.value });
  // };

  // public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!this.state.value) {
  //     return;
  //   }
  //   const newTodo = {
  //     id: Date.now(),
  //     content: this.state.value,
  //     completed: false
  //   };
  //   const todos: TodoItem[] = [...this.state.todoItems, newTodo];
  //   this.setState({ todoItems: todos, value: "" });
  // };

  // public handleUpdate = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   id: number
  // ) => {
  //   console.log(event.target.value, id);
  // };

  // prettier-ignore
  // public deleteTodo = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
  //   const newTodos = this.state.todoItems.filter(item => item.id !== id);
  //   this.setState({ todoItems: newTodos });
  // };

  // prettier-ignore
  // public handleComplete = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
  //   const todoItems = this.state.todoItems.map(item => {
  //     if (item.id === id) {
  //       item.completed = !item.completed;
  //     }
  //     return item;
  //   });
  //   this.setState({ todoItems });
  // };

  public render() {
    const { title, cardId } = this.props;
    return (
      <StyledCard>
        <CardHeader>{title }</CardHeader>
        <Cardbody>
          <pre>
            <code>{JSON.stringify(this.props, null, 2)}</code>
          </pre>
          <button className="btn btn-primary tooltip" data-tooltip="delete card" onClick={e => this.props.deleteCard(cardId)}>X</button>
        </Cardbody>
      </StyledCard>
    );
  }
}

export default Card;
