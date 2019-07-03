import {Component, OnInit} from '@angular/core';
import {AppContextService} from '../services/app-context.service';
import {UserInterface} from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currUser: UserInterface;

  constructor(
    private appContext: AppContextService
  ) {
  }

  ngOnInit() {
    this.appContext.currUser.subscribe((user: UserInterface) => {
      this.currUser = user;
    });
  }

}
