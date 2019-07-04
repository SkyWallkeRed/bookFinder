import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AppContextService} from '../services/app-context.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  public wishList = [];

  constructor(
    private appContext: AppContextService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.wishList = this.appContext.userWishList;
  }

  removeFromWishList(eleToRemoveIndex: number): void {
    this.appContext.removeFromWishList(eleToRemoveIndex);
  }
}
