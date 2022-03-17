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
    this.postService.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.postService.createPost(post).subscribe((response: any) => {
      post.id = response.id;
      this.posts.unshift(post);
    });
  }

  updatePost(post: any) {
    this.postService.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    this.postService.deletePost(post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
