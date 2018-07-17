import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Store, Select } from '@ngxs/store'
import { Book } from '../../models/Book'
import { AddBook } from '../../state/BookState.actions'
import { BookState } from '../../state/BookState'
import { Observable } from 'rxjs'
import { AddTutorial } from '../../state/TutorialState.actions'


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  // select all books
  @Select(BookState.allBooks)
  allBooks$: Observable<Book[]>

  // select only thick books
  @Select(BookState.thickBooks)
  thickBooks$: Observable<Book[]>

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(new AddTutorial('Redux'));
  }

  doAddBook() {
    // add a book with "random" number of pages (below 200)
    const book = new Book()
    book.id = '' + Date.now()
    book.title = 'Just a book'
    book.noPages = Date.now() % 200
    this.store.dispatch(new AddBook({ book }))
  }

}
