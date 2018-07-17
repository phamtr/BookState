import { Book } from '../models/Book'

export class AddBook {
  static readonly type = 'AddBook'

  constructor(public payload: { book: Book }) {
  }
}

export class RemoveBook {
  static readonly type = 'RemoveBook'

  constructor(public payload: { id: string }) {
  }
}