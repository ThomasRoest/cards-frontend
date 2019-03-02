import { ICard } from "../components/types";

export function getCards() {
  const storage: any = localStorage.getItem("cards");
  return JSON.parse(storage);
}

export function createNewCard(newCard: ICard) {
  const storage: any = localStorage.getItem("cards");
  let cards: ICard[];

  if (storage) {
    cards = JSON.parse(storage);
    const updatedCards = [...cards, newCard];
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  } else {
    cards = [newCard];
    localStorage.setItem("cards", JSON.stringify(cards));
  }
}

export function deleteCard(id: number) {
  const storage: any = localStorage.getItem("cards");
  let cards: ICard[];
  if (storage) {
    cards = JSON.parse(storage);
    const updatedCards = cards.filter(card => card.id !== id);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  }
}

// https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
