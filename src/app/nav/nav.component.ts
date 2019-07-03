import {Component, OnInit} from '@angular/core';
import {AppContextService} from '../services/app-context.service';
import {UserInterface} from '../interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
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
