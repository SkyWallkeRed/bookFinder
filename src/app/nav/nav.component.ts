import {Component, OnInit} from '@angular/core';
import {AppContextService} from '../services/app-context.service';
import {UserInterface} from '../interfaces';
import {MatDialog} from '@angular/material';
import {WishListComponent} from '../wish-list/wish-list.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public currUser: UserInterface;

  constructor(
    private appContext: AppContextService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.appContext.currUser.subscribe((user: UserInterface) => {
      this.currUser = user;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WishListComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // result is boolean
      }
    });
  }

  logOutUser() {
    this.appContext.logOut();
  }
}
