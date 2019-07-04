import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApiService {

  private API_KEY = '&key=AIzaSyAHLiNXmQKvL9Hfalypu97jR6DSqQgaVuI';
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes';
  private query = '?q=';
  private resultNumberQuery = `maxResults=`;

  constructor(private http: HttpClient) {
  }


  buildQuery(userQuery: string, resultNum: number) {
    return `${this.baseUrl}${this.query + userQuery}&${this.resultNumberQuery}${resultNum}${this.API_KEY}`;
  }

  findBooks(value: string) {
    return this.http.get(this.buildQuery(value, 20));
  }
}
