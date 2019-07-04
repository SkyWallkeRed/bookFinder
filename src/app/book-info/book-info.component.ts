import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BookInterface} from '../interfaces';


@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  public bookData: BookInterface;

  constructor(
    public dialogRef: MatDialogRef<BookInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close(): void {
    this.dialogRef.close(false);
  }

  add() {
    this.dialogRef.close(true);
  }

  ngOnInit() {
    this.bookData = this.data.bookData;
  }

}
