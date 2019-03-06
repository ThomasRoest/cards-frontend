export interface ICard {
  id: number;
  title: string;
  notes: INote[];
}

export interface INote {
  id: number;
  content: string;
  cardId: number;
}
