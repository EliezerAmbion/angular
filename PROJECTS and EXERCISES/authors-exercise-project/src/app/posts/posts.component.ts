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
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.log(`Unexpected Error has occured: ${error}`);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.postService.createPost(post).subscribe(
      (response: any) => {
        post.id = response.id;
        this.posts.unshift(post);
      },
      (error: Response) => {
        if (error.status === 400) {
          // this.form.setError(error.json());
          console.log();
        } else {
          console.log(`Unexpected Error has occured: ${error}`);
        }
      }
    );
  }

  updatePost(post: any) {
    this.postService.updatePost(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(`Unexpected Error has occured: ${error}`);
      }
    );
  }

  deletePost(post: any) {
    this.postService.deletePost(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          console.log('This post has already been deleted.');
        } else {
          console.log(`Unexpected Error has occured: ${error}`);
        }
      }
    );
  }
}
