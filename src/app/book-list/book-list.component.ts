import {Component, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';
import {AppContextService} from '../services/app-context.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public booksToShow: {}[];

  constructor(
    private booksService: BooksService,
    private appContext: AppContextService
  ) {
  }

  ngOnInit() {
    this.booksToShow = [];
    this.booksService.bookSearchResultListSubject.subscribe((bookList: any) => {
      this.booksToShow = bookList;
    });
  }

  addToWishList(bookInfo) {
    this.appContext.addToUserWishList(bookInfo);
  }
}
