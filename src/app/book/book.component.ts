import {Component, Input, OnInit} from '@angular/core';

interface BookInterface {
  authors: string[];
  averageRating: number;
  categories: string[];
  description: string;
  imageLinks: { smallThumbnail: string, thumbnail: string };
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  previewLink: string;
  printType: number;
  publishedDate: number;
  publisher: number;
  ratingsCount: number;
  subtitle: number;
  title: number;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bookData;
  public volumeInfo: BookInterface;

  constructor() {
  }

  ngOnInit() {
    this.loadBookData(this.bookData);
  }

  loadBookData(bookData: any): void {
    console.log(this.volumeInfo);

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
    console.log(this.volumeInfo);
  }

}
