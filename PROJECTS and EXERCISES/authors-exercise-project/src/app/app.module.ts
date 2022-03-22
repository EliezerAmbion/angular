import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PostService } from './services/post.service';
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
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavoriteComponent,
    TitleCasingExerciseComponent,
    TitleCasePipe,
    LikeExerciseComponent,
    PostsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TitleCasingExerciseComponent,
      },
      {
        path: 'author',
        component: AuthorComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
