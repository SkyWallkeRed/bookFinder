import {Component, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';
import {InputInterface} from '../interfaces';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent implements OnInit {
  public inputSetup: InputInterface = {
    btnText: 'book me in',
    isBtn: false,
    placeHolder: 'Go for Books',
    autoComp: {
      isActive: false,
      value: ''
    }
  };

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
  }

  onInputSubmit($event) {
    console.log($event);
    this.booksService.getBooks(String($event));
  }

}
