import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NameFormComponent} from './nameForm/name-form.component';
import {NavComponent} from './nav/nav.component';
import {SearchBooksComponent} from './search-books/search-books.component';
import {BookComponent} from './book/book.component';
import {BookListComponent} from './book-list/book-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BookInfoComponent} from './book-info/book-info.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {MatListModule} from '@angular/material/list';
import { LastSearchesComponent } from './last-searches/last-searches.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NameFormComponent,
    NavComponent,
    SearchBooksComponent,
    BookComponent,
    BookListComponent,
    BookInfoComponent,
    WishListComponent,
    LastSearchesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule
  ],
  entryComponents: [BookInfoComponent, WishListComponent, LastSearchesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
