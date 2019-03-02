import React, { Component } from "react";
import TodoListItem from "../todolistitem";
import NewTodoForm from "../newtodoform";

class TodoList extends Component {
  public render() {
    return (
      <ul>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />

        <NewTodoForm />
      </ul>
    );
  }
}

export default TodoList;
