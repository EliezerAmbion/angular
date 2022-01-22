import { AuthorService } from './author.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [AppComponent, AuthorComponent],
  imports: [BrowserModule],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
