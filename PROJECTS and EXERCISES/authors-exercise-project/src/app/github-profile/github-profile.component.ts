import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private router: Router) {}

  // as a first argument, we need to pass an array of link parameters.
  // So the same kind of array we use with the routerLink directive.
  // The first element is the path, which is /followers,
  // and if you have any required parameters we will add them after the first parameter.

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }

  ngOnInit() {}
}
