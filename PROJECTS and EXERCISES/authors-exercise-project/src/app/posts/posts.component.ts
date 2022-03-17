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
    this.postService.get().subscribe((response) => {
      (this.posts = response),
        (err: any) => console.log(err),
        () => console.log('Complete');
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.postService.create(post).subscribe((response: any) => {
      post.id = response.id;
      this.posts.unshift(post);
    });
  }

  updatePost(post: any) {
    this.postService.update(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    this.postService.delete(post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
