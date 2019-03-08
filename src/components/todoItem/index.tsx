import React from "react";
import { ITodoItem } from "../../interfaces";
import { StyledTodoItem, TextInput, DeleteTodoButton } from "./style";

interface Props {
  item: ITodoItem;
  cardId: number;
  updateTodo: (
    cardId: number,
    todoItemId: number,
    value: string | boolean,
    name: string
  ) => void;
  deleteTodoItem: (cardId: number, todoItemId: number) => void;
}

const TodoItem = ({ item, cardId, updateTodo, deleteTodoItem }: Props) => {
  return (
    <StyledTodoItem key={item.id}>
      <label className="form-checkbox">
        <input
          type="checkbox"
          name="completed"
          checked={item.completed}
          onChange={e =>
            updateTodo(cardId, item.id, e.target.checked, e.target.name)
          }
        />
        <i className="form-icon" />
      </label>
      <TextInput
        type="text"
        name="content"
        value={item.content}
        placeholder="..."
        completed={item.completed}
        onChange={e =>
          updateTodo(cardId, item.id, e.target.value, e.target.name)
        }
      />
      <DeleteTodoButton onClick={() => deleteTodoItem(cardId, item.id)}>
        X
      </DeleteTodoButton>
    </StyledTodoItem>
  );
};

export default TodoItem;
