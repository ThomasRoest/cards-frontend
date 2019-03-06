import React from "react";
import styled from "styled-components";

import { NotesSection, Cardbody, CardHeader } from "./style";
import { INote } from "../types";
import { Note, StyledCard } from "./style";
import { ClearIcon } from "../icons";

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
                className="btn btn-sm tooltip"
                data-tooltip="delete note"
                onClick={() => deleteNote(item.cardId, item.id)}
              >
                <ClearIcon />
              </button>
            </Note>
          ))}
        </NotesSection>

        <button
          className="btn btn-primary tooltip"
          data-tooltip="delete card"
          onClick={() => props.deleteCard(cardId)}
        >
          <ClearIcon />
        </button>
      </Cardbody>
    </StyledCard>
  );
};

export default Card;
