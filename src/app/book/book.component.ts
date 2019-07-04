import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookInfoComponent} from '../book-info/book-info.component';
import {MatDialog} from '@angular/material';
import {BookInterface, UserInterface} from '../interfaces';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bookData;
  @Output() addToWishList = new EventEmitter<BookInterface>();
  public volumeInfo: BookInterface;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadBookData(this.bookData);
  }

  loadBookData(bookData: any): void {

    this.volumeInfo = {
      authors: bookData.volumeInfo.authors || [''],
      averageRating: bookData.volumeInfo.averageRating || '',
      categories: bookData.volumeInfo.categories || '',
      description: bookData.volumeInfo.description || '',
      imageLinks: bookData.volumeInfo.imageLinks || {thumbnail: '../../assets/missing-image.jpg.jpeg', smallThumbnail: ''},
      infoLink: bookData.volumeInfo.infoLink || '',
      language: bookData.volumeInfo.language || '',
      maturityRating: bookData.volumeInfo.maturityRating || '',
      pageCount: bookData.volumeInfo.pageCount || 0,
      previewLink: bookData.volumeInfo.previewLink || '',
      printType: bookData.volumeInfo.printType || '',
      publishedDate: bookData.volumeInfo.publishedDate || '',
      publisher: bookData.volumeInfo.publisher || '',
      ratingsCount: bookData.volumeInfo.ratingsCount || '',
      subtitle: bookData.volumeInfo.subtitle || '',
      title: bookData.volumeInfo.title || ''
    };

  }

  showFullInfo() {
    this.openDialog(this.volumeInfo);
  }

  openDialog(data: BookInterface): void {
    const dialogRef = this.dialog.open(BookInfoComponent, {
      width: '550px',
      data: {bookData: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // result is boolean
        this.addToWishList.emit(this.volumeInfo);
      }
    });
  }

}
