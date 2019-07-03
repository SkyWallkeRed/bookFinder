import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces';
import {ReplaySubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserInterface = {name: null};
  public userSubject = new ReplaySubject(1);

  constructor() {
  }

  login(userName: string) {
    const activeUser: UserInterface = {
      name: userName
    };
    this.user = activeUser;
    this.userSubject.next(this.user);
  }

  logOut() {
  }

}
