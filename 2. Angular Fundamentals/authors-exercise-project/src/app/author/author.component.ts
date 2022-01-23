import { AuthorService } from './../author.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  authors: any;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthor();
  }
}
