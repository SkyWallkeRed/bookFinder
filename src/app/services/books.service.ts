import {Injectable} from '@angular/core';
import {GoogleBooksApiService} from '../APIs/google-books-api.service';
import {ReplaySubject} from 'rxjs';
import {StoreService} from './store.service';
import {BookInterface, booksAppStorageEnum} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookSearchResultList: { items: {}[] };
  public bookSearchResultListSubject = new ReplaySubject(1);
  private bookSearchSessionHistory = [];
  public currentSearchString: string;

  constructor(
    private booksApi: GoogleBooksApiService,
    private storeService: StoreService
  ) {
    const lastSearch = this.storeService.getItem(booksAppStorageEnum.LAST_SEARCH);
    if (lastSearch) {
      this.bookSearchResultList = JSON.parse(lastSearch);
      this.bookSearchResultListSubject.next(this.bookSearchResultList);
    }
  }

  getBooks(searchString: string) {
    if (!searchString) {
      searchString = '';
    }
    this.booksApi.findBooks(searchString).subscribe((books: any) => {
      this.bookSearchSessionHistory.push({key: this.currentSearchString, value: books});
      this.bookSearchResultListSubject.next([]);
      this.bookSearchResultList = books;
      this.bookSearchResultListSubject.next(this.bookSearchResultList.items);
      this.currentSearchString = searchString;
      this.storeService.setItem(booksAppStorageEnum.LAST_SEARCH, this.bookSearchResultList.items);
    });
  }

}
