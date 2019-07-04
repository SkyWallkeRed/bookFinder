import {Injectable} from '@angular/core';
import {booksAppStorageEnum, UserInterface} from '../interfaces';
import {ReplaySubject} from 'rxjs';
import {StoreService} from './store.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserInterface = {name: null};
  public userSubject = new ReplaySubject(1);

  private userWishList = [];
  public userWishListSubject = new ReplaySubject(1);

  constructor(
    private storeService: StoreService
  ) {
    const USER = this.storeService.getItem(booksAppStorageEnum.USER);
    if (USER) {
      const parsedUser = JSON.parse(USER);
      const userName = parsedUser['name'];
      this.user = {name: userName};
      this.userSubject.next(this.user);
    }
    const WISH_LIST = storeService.getItem(booksAppStorageEnum.WISH_LIST);
    if (WISH_LIST) {
      this.userWishList = JSON.parse(WISH_LIST);
      this.userWishListSubject.next(this.userWishList);
    }
  }

  login(userName: string) {
    const activeUser: UserInterface = {
      name: userName
    };
    this.user = activeUser;
    this.userSubject.next(this.user);
    this.storeService.setItem(booksAppStorageEnum.USER, this.user);
  }

  logOut() {
    this.storeService.clearData();
    window.location.reload();
  }

  addToWishList(book) {
    this.userWishList.push(book);
    this.userWishListSubject.next(this.userWishList);
    this.storeService.setItem(booksAppStorageEnum.WISH_LIST, this.userWishList);
  }

  removeFromWishList(index): void {
    this.userWishList.splice(index, 1);
    this.userWishListSubject.next(this.userWishList);
    this.storeService.setItem(booksAppStorageEnum.WISH_LIST, this.userWishList);
  }

}
