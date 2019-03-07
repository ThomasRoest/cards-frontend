import { ICard, INote } from "../interfaces";

export function getCards() {
  const storage: any = localStorage.getItem("cards");
  return JSON.parse(storage);
}

export function sync(cards: ICard[]) {
  localStorage.setItem("cards", JSON.stringify(cards));
}
