import React, { Component } from "react";
import Card from "../card";
import { ICard } from "../types";
import styled from "styled-components";
import {
  GlobalStyle,
  CardContainer,
  StyledApp,
  AddnewcardButton
} from "./style";
import {
  getCards,
  createNewCard,
  deleteCard
} from "../../services/cardService";

interface State {
  cards: ICard[];
}

class App extends Component<{}, State> {
  public state = {
    cards: []
  };

  public componentDidMount() {
    const cards = getCards();
    if (cards) {
      this.setState({ cards });
    }
  }

  public createNewCard = () => {
    const newCard = {
      id: Date.now(),
      title: "add title here",
      todoItems: [],
      notes: []
    };

    createNewCard(newCard);
    const cards = [...this.state.cards, newCard];
    this.setState({ cards });
  };

  public deleteCard = (id: number) => {
    deleteCard(id);
    const cards = this.state.cards.filter((card: ICard) => card.id !== id);
    this.setState({ cards });
  };

  public updateTitle = (id: number, value: string) => {
    const cards = this.state.cards.map((card: ICard) => {
      if (card.id === id) {
        card.title = value;
      }
      return card;
    });

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
              updateTitle={this.updateTitle}
              cardId={item.id}
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
