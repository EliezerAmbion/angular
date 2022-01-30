import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;

  constructor() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
