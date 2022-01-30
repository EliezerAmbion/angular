import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'authors-exercise-project';

  // let us imagine that the post here is coming from the database. This is just a sample data that is why it is hardcoded.
  post = {
    title: 'Test Title',
    isFavorite: false,
  };
}
