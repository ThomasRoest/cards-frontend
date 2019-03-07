import React from "react";
import { INote, ITodoItem } from "../../interfaces";
import {
  NotesSection,
  Cardbody,
  CardHeader,
  Note,
  StyledCard,
  TodoSection,
  CardFooter,
  TitleInput
} from "./style";
import { ClearIcon } from "../icons";

interface Props {
  title: string;
  cardId: number;
  notes: INote[];
  todoItems: ITodoItem[];
  deleteCard: (id: number) => void;
  handleChange: (id: number, value: string) => void;
  createNote: (cardId: number) => void;
  deleteNote: (cardId: number, noteId: number) => void;
  handleNoteChange: (id: number, noteId: number, value: string) => void;
  createTodoItem: (cardId: number) => void;
  deleteTodoItem: (cardId: number, todoItemId: number) => void;
  updateTodo: (
    cardId: number,
    todoItemId: number,
    value: string | boolean,
    name: string
  ) => void;
}

const Card = (props: Props) => {
  const {
    title,
    cardId,
    handleChange,
    createNote,
    notes,
    handleNoteChange,
    deleteNote,
    createTodoItem,
    todoItems,
    deleteTodoItem,
    updateTodo
  } = props;
  return (
    <StyledCard backgroundColor="mintCream">
      <CardHeader>
        <TitleInput
          type="text"
          name="title"
          value={title}
          onChange={e => handleChange(cardId, e.target.value)}
          placeholder="Add title"
        />
      </CardHeader>
      <Cardbody>
        <TodoSection>
          {todoItems.map(item => (
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
          ))}
        </TodoSection>

        <NotesSection>
          {notes.map(item => (
            <Note key={item.id}>
              <textarea
                className="form-input"
                value={item.content}
                placeholder="note"
                onChange={e =>
                  handleNoteChange(cardId, item.id, e.target.value)
                }
              />
              <button
                className="btn btn-sm tooltip"
                data-tooltip="delete note"
                onClick={() => deleteNote(item.cardId, item.id)}
              >
                <ClearIcon />
              </button>
            </Note>
          ))}
        </NotesSection>
      </Cardbody>

      <CardFooter>
        <button
          className="btn btn-primary tooltip"
          data-tooltip="delete card"
          onClick={() => props.deleteCard(cardId)}
        >
          <ClearIcon />
        </button>
        <button onClick={() => createNote(cardId)}>add note</button>
        <button onClick={() => createTodoItem(cardId)}>Add todo</button>
      </CardFooter>
    </StyledCard>
  );
};

export default Card;
