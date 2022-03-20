import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    const http$ = this.postService.getAll();

    http$.subscribe({
      next: (response) => (this.posts = response),
      error: (err) => console.log('error: ', err),
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.unshift(post);

    input.value = '';

    // NOTE: should delete post if the post is null or undefined
    this.postService.create(post).subscribe({
      next: (response: any) => (post.id = response.id),
      error: (err) => this.posts.shift(post),
    });
  }

  updatePost(post: any, input: HTMLInputElement) {
    input.value = post.title;
    this.posts.shift(post);

    this.postService.update(post).subscribe((response) => {});
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id).subscribe(() => {});
  }
}
