import { Selector, State, Action, StateContext } from '@ngxs/store'
import { BookStateModel } from './BookState.model'
import { AddBook, RemoveBook } from './BookState.actions'

@State<BookStateModel>({
  name: 'book',
  defaults: {
    books: []
  }
})
export class BookState {
  @Selector()
  static thickBooks(state: BookStateModel) {
    const minNoPagesToBeConsideredThick = 100
    return [
      ...state.books.filter(book => book.noPages >= minNoPagesToBeConsideredThick)
    ]
  }

  @Selector()
  static allBooks(state: BookStateModel) {
    return state.books
  }

  @Action(AddBook)
  addBook(context: StateContext<BookStateModel>, addBook: AddBook) {
    context.patchState({
      books: [
        ...context.getState().books,
        addBook.payload.book
      ]
    })
  }
  
  @Action(RemoveBook)
  removeBook(context: StateContext<BookStateModel>, removeBook: RemoveBook) {
    context.patchState({
      books: [
        ...context.getState().books.filter(book => book.id !== removeBook.payload.id)
      ]
    })
  }
}
