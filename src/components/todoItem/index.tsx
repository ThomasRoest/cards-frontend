import React from "react";
import { ITodoItem } from "../../interfaces";

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
    <div key={item.id} className="input-group">
      <div className="input-group-addon">
        <input
          type="checkbox"
          name="completed"
          checked={item.completed}
          onChange={e =>
            updateTodo(cardId, item.id, e.target.checked, e.target.name)
          }
        />
      </div>
      <input
        type="text"
        className="form-input"
        name="content"
        value={item.content}
        placeholder="input"
        onChange={e =>
          updateTodo(cardId, item.id, e.target.value, e.target.name)
        }
      />
      <button
        className="btn btn-primary input-group-btn"
        onClick={() => deleteTodoItem(cardId, item.id)}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
