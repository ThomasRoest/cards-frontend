import React, { Component } from "react";
import Card from "../card";
import { ICard } from "../../interfaces";
import * as localStorage from "../../services/localStorage";
import {
  GlobalStyle,
  CardContainer,
  StyledApp,
  AddnewcardButton
} from "./style";

interface State {
  cards: ICard[];
}

class App extends Component<{}, State> {
  public state = {
    cards: []
  };

  public componentDidMount() {
    const cards = localStorage.getCards();
    if (cards) {
      this.setState({ cards });
    }
  }

  public createNewCard = () => {
    const newCard = {
      id: Date.now(),
      title: "",
      todoItems: [],
      notes: []
    };

    const cards = [...this.state.cards, newCard];
    localStorage.sync(cards);
    this.setState({ cards });
  };

  public deleteCard = (id: number) => {
    const cards = this.state.cards.filter((card: ICard) => card.id !== id);
    localStorage.sync(cards);
    this.setState({ cards });
  };

  public handleChange = (id: number, value: string) => {
    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === id) {
        card.title = value;
      }
      return card;
    });

    localStorage.sync(cards);
    this.setState({ cards });
  };

  public createNote = (cardId: number) => {
    const newNote = { id: Date.now(), content: "", cardId };
    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === cardId) {
        card.notes.push(newNote);
      }
      return card;
    });

    localStorage.sync(cards);
    this.setState({ cards });
  };

  public handleNoteChange = (id: number, noteId: number, value: string) => {
    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === id) {
        const newNotes = card.notes.map(note => {
          if (note.id === noteId) {
            note.content = value;
          }
          return note;
        });
      }
      return card;
    });

    localStorage.sync(cards);
    this.setState({ cards });
  };

  public deleteNote = (cardId: number, noteId: number) => {
    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === cardId) {
        const newNotes = card.notes.filter(note => note.id !== noteId);
        card.notes = newNotes;
      }
      return card;
    });

    localStorage.sync(cards);
    this.setState({ cards });
  };

  public createTodoItem = (cardId: number) => {
    const newTodo = { id: Date.now(), content: "", completed: false, cardId };

    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === cardId) {
        card.todoItems.push(newTodo);
      }
      return card;
    });

    localStorage.sync(cards);
    this.setState({ cards });
  };

  public deleteTodoItem = (cardId: number, todoItemId: number) => {
    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === cardId) {
        const newTodoItems = card.todoItems.filter(
          item => item.id !== todoItemId
        );
        card.todoItems = newTodoItems;
      }
      return card;
    });

    localStorage.sync(cards);
    this.setState({ cards });
  };

  public updateTodo = (
    cardId: number,
    todoItemId: number,
    value: any,
    name: string
  ) => {
    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === cardId) {
        const newTodos = card.todoItems.map(todoItem => {
          if (todoItem.id === todoItemId) {
            if (name === "content") {
              todoItem.content = value;
            } else if (name === "completed") {
              todoItem.completed = value;
            }
          }
          return todoItem;
        });
        card.todoItems = newTodos;
      }
      return card;
    });

    console.log(cards);

    localStorage.sync(cards);
    this.setState({ cards });
  };

  public render() {
    const { cards } = this.state;
    return (
      <StyledApp>
        <GlobalStyle />
        <CardContainer>
          {cards.map((item: ICard) => (
            <Card
              key={item.id}
              title={item.title}
              deleteCard={this.deleteCard}
              handleChange={this.handleChange}
              cardId={item.id}
              createNote={this.createNote}
              handleNoteChange={this.handleNoteChange}
              notes={item.notes}
              deleteNote={this.deleteNote}
              createTodoItem={this.createTodoItem}
              todoItems={item.todoItems}
              deleteTodoItem={this.deleteTodoItem}
              updateTodo={this.updateTodo}
            />
          ))}

          <AddnewcardButton onClick={this.createNewCard}>
            add new card
          </AddnewcardButton>
        </CardContainer>
      </StyledApp>
    );
  }
}

export default App;
