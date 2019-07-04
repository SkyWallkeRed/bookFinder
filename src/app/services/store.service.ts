import {Injectable} from '@angular/core';
import {booksAppStorageEnum} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {
  }

  setItem(key: booksAppStorageEnum, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: booksAppStorageEnum): any {
    return localStorage.getItem(key);
  }

  clearData() {
    localStorage.removeItem(booksAppStorageEnum.USER);
  }

  clearAllUserData() {
    localStorage.removeItem(booksAppStorageEnum.USER);
    localStorage.removeItem(booksAppStorageEnum.WISH_LIST);
    localStorage.removeItem(booksAppStorageEnum.LAST_SEARCH);
  }

}
