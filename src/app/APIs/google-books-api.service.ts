import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApiService {
  private bookListUrl: 'https://developers.google.com/books/docs/v1/using#WorkingVolumes';

  private API_KEY = '&key=AIzaSyAHLiNXmQKvL9Hfalypu97jR6DSqQgaVuI';
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes';
  private query = '?q=';
  private resultNumber = 10;
  private resultNumberQuery = `maxResults=`;

  // private queryString: string;


  constructor(private http: HttpClient) {
  }


  buildQuery(userQuery: string, resultNum: number) {
    return `${this.baseUrl}${this.query + userQuery}&${this.resultNumberQuery}${resultNum}${this.API_KEY}`;
  }

  findBooks(value: string) {
    console.log(this.buildQuery(value, 10));
    return this.http.get(this.buildQuery(value, 10));
  }
}
