export interface UserInterface {
  name: string;
  wishList?: any[];
  lastSearch?: any[];
}

export interface InputInterface {
  placeHolder: string;
  btnText: string;
  isBtn: boolean;
  autoComp: {
    isActive: boolean;
    value: string;
  };
}

export enum booksAppStorageEnum {
  USER = 'user',
  WISH_LIST = 'wishList',
  LAST_SEARCH = 'lastSearch'
}

export interface BookInterface {
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
