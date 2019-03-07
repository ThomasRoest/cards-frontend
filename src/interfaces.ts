export interface ICard {
  id: number;
  title: string;
  notes: INote[];
  todoItems: ITodoItem[];
}

export interface INote {
  id: number;
  content: string;
  cardId: number;
}

export interface ITodoItem {
  id: number;
  content: string;
  cardId: number;
  completed: boolean;
}
