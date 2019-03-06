import React from "react";
import styled from "styled-components";

import { NotesSection, Cardbody, CardHeader } from "./style";
import { INote } from "../types";
import { Note, StyledCard } from "./style";

interface Props {
  title: string;
  cardId: number;
  notes: INote[];
  deleteCard: (id: number) => void;
  handleChange: (id: number, value: string) => void;
  createNote: (cardId: number) => void;
  deleteNote: (cardId: number, noteId: number) => void;
  handleNoteChange: (id: number, noteId: number, value: string) => void;
}

const Card = (props: Props) => {
  const {
    title,
    cardId,
    handleChange,
    createNote,
    notes,
    handleNoteChange,
    deleteNote
  } = props;
  return (
    <StyledCard>
      <CardHeader>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => handleChange(cardId, e.target.value)}
          placeholder="Add title"
        />
        <button onClick={() => createNote(cardId)}>add note</button>
      </CardHeader>
      <Cardbody>
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
                className="btn btn-sm btn-error"
                onClick={() => deleteNote(item.cardId, item.id)}
              >
                error button
              </button>
              <code>{JSON.stringify(item, null, 2)}</code>
            </Note>
          ))}
        </NotesSection>

        <button
          className="btn btn-primary tooltip"
          data-tooltip="delete card"
          onClick={() => props.deleteCard(cardId)}
        >
          X
        </button>
      </Cardbody>
    </StyledCard>
  );
};
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

export default Card;
