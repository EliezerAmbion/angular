import { FormsModule } from '@angular/forms';
import { GithubFollowersService } from './services/github-followers.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PostService } from './services/post.service';
import { AuthorService } from './services/author.service';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasingExerciseComponent } from './title-casing-exercise/title-casing-exercise.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeExerciseComponent } from './like-exercise/like-exercise.component';

import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ObservableComponent } from './observable/observable.component';
import { BrowserModule } from '@angular/platform-browser';

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
    ObservableComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
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
        path: 'followers/:id',
        component: GithubProfileComponent,
      },
      {
        path: 'followers',
        component: GithubFollowersComponent,
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
  providers: [AuthorService, GithubFollowersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
