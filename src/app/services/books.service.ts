import {Injectable} from '@angular/core';
import {GoogleBooksApiService} from '../APIs/google-books-api.service';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookSearchResultList: { items: {}[] };
  public bookSearchResultListSubject = new ReplaySubject(1);

  constructor(private booksApi: GoogleBooksApiService) {
  }


  getBooks(searchString: string) {
    if (!searchString) {
      searchString = '';
    }
    this.booksApi.findBooks(searchString).subscribe((books: any) => {
      this.bookSearchResultListSubject.next([]);
      console.log(books);
      this.bookSearchResultList = books;
      this.bookSearchResultListSubject.next(this.bookSearchResultList.items);
    });
  }
}
