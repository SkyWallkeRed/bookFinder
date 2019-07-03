import {Component, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  private booksToShow: {}[];

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.booksToShow = [];
    this.booksService.bookSearchResultListSubject.subscribe((bookList: any) => {
      this.booksToShow = bookList;
    });
  }

}
