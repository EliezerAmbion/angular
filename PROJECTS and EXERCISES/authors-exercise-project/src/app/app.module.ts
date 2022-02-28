import { AuthorService } from './author.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasingExerciseComponent } from './title-casing-exercise/title-casing-exercise.component';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { LikeExerciseComponent } from './like-exercise/like-exercise.component';

import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavoriteComponent,
    TitleCasingExerciseComponent,
    TitleCasePipe,
    LikeExerciseComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
