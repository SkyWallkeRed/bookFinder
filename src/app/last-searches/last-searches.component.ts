import {Component, Inject, OnInit} from '@angular/core';
import {AppContextService} from '../services/app-context.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.scss']
})
export class LastSearchesComponent implements OnInit {
  private lastSearchArray = [];

  constructor(
    private appContext: AppContextService,
    private booksService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.booksService.bookSearchResultListForRestorSubject.subscribe((resultSet: any) => {
      this.lastSearchArray = resultSet;
    });
  }

  setResultToBe(index: number): void {
  }
}
