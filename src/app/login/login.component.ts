import {Component, OnInit} from '@angular/core';
import {AppContextService} from '../services/app-context.service';
import {InputInterface, UserInterface} from '../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public currUser: UserInterface;
  public inputSetup: InputInterface = {
    btnText: 'book me in',
    isBtn: true,
    placeHolder: 'Enter Name',
    autoComp: {
      isActive: true,
      value: 'name'
    }
  };

  constructor(
    private appContext: AppContextService
  ) {
  }

  ngOnInit() {
    this.appContext.currUser.subscribe((user: UserInterface) => {
      this.currUser = user;
    });
  }

  onNameSubmit(validUserName) {
    this.appContext.setUser(validUserName);
  }

}
