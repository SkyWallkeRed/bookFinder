import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {StoreService} from './store.service';
import {BooksService} from './books.service';
import {UserInterface} from '../interfaces';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppContextService {
  private currentUser: UserInterface;
  public currUser = new ReplaySubject(1);

  constructor(
    private userService: UserService,
    private storService: StoreService,
    private bookService: BooksService
  ) {
    this.userService.userSubject.subscribe((user: UserInterface) => {
      this.currentUser = user;
      this.currUser.next(this.currentUser);
    });
  }

  setUser(validUserName: string): void {
    this.userService.login(validUserName);
  }
}
