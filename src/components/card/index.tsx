import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  flex: 0 1 300px;
  padding: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 350px;
  input {
    width: 100%;
  }
`;

const CardHeader = styled.header``;

const Cardbody = styled.div``;

interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

interface State {
  value: string;
  todoItems: TodoItem[];
}

class Card extends React.Component<{}, State> {
  public state = {
    value: "",
    todoItems: [
      {
        id: 1,
        content: "This should be done",
        completed: false
      },
      {
        id: 2,
        content: "This should also be done",
        completed: false
      },
      {
        id: 3,
        content: "And another one",
        completed: false
      }
    ]
  };

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      content: this.state.value,
      completed: false
    };
    const todos: TodoItem[] = [...this.state.todoItems, newTodo];
    this.setState({ todoItems: todos, value: "" });
  };

  public deleteTodo = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    const newTodos = this.state.todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: newTodos });
  };

  public handleComplete = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const todoItems = this.state.todoItems.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todoItems });
  };

  public render() {
    return (
      <StyledCard>
        <CardHeader>cardheader</CardHeader>
        <Cardbody>
          <ul>
            {this.state.todoItems.map(item => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    name="completed"
                    onChange={e => this.handleComplete(e, item.id)}
                  />
                  <input
                    type="text"
                    value={item.content}
                    name="content"
                    onChange={e => this.handleChange(e)}
                  />
                  completed: {JSON.stringify(item.completed)}
                  <button onClick={e => this.deleteTodo(e, item.id)}>X</button>
                </li>
              );
            })}
          </ul>

          <form onSubmit={e => this.handleSubmit(e)}>
            <hr />
            {/* <label htmlFor="">a</label> */}
            <input
              type="text"
              value={this.state.value}
              onChange={e => this.handleChange(e)}
            />
          </form>
        </Cardbody>
      </StyledCard>
    );
  }
}

export default Card;
