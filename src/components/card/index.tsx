import React from "react";
import { INote, ITodoItem } from "../../interfaces";
import TodoItem from "../todoItem";
import {
  NotesSection,
  Cardbody,
  CardHeader,
  Note,
  StyledCard,
  TodoSection,
  CardFooter,
  TitleInput,
  TextArea
} from "./style";
import { TrashIcon, ClearIcon } from "../icons";

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
            <TodoItem
              key={item.id}
              item={item}
              cardId={cardId}
              updateTodo={updateTodo}
              deleteTodoItem={deleteTodoItem}
            />
          ))}
        </TodoSection>

        <NotesSection>
          {notes.map(item => (
            <Note key={item.id}>
              <TextArea
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
        <button className="btn btn-link" onClick={() => createNote(cardId)}>
          add note
        </button>
        <button className="btn btn-link" onClick={() => createTodoItem(cardId)}>
          Add todo
        </button>
        <button
          className="btn btn-link btn-delete tooltip"
          data-tooltip="delete card"
          onClick={() => props.deleteCard(cardId)}
        >
          <TrashIcon />
        </button>
      </CardFooter>
    </StyledCard>
  );
};

export default Card;
