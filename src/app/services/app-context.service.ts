import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {StoreService} from './store.service';
import {booksAppStorageEnum, UserInterface} from '../interfaces';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppContextService {
  private currentUser: UserInterface;
  public currUser = new ReplaySubject(1);

  public userWishList = [];
  private LAST_SEARCH;

  constructor(
    private userService: UserService,
    private storService: StoreService,
  ) {
    this.userService.userSubject.subscribe((user: UserInterface) => {
      this.currentUser = user;
      this.currUser.next(this.currentUser);
    });
    this.userService.userWishListSubject.subscribe((wishList: any[]) => {
      this.userWishList = wishList;
    });
    const LAST_SEARCH = this.storService.getItem(booksAppStorageEnum.LAST_SEARCH);
    if (LAST_SEARCH) {
      this.LAST_SEARCH = JSON.parse(LAST_SEARCH);
    }
  }

  setUser(validUserName: string): void {
    this.userService.login(validUserName);
  }

  addToUserWishList(book) {
    this.userService.addToWishList(book);
  }

  removeFromWishList(eleToRemoveIndex: number) {
    this.userService.removeFromWishList(eleToRemoveIndex);
  }

  logOut() {
    this.userService.logOut();
  }

}
