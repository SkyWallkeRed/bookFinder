import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AppContextService} from '../services/app-context.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  private wishList = [];

  constructor(
    private appContext: AppContextService,
    public dialogRef: MatDialogRef<WishListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.wishList = this.appContext.userWishList;
  }

  close(): void {
    this.dialogRef.close(false);
  }

  add() {
    this.dialogRef.close(true);
  }

  removeFromWishList(eleToRemoveIndex: number): void {
  this.appContext.removeFromWishList(eleToRemoveIndex);
  }
}
