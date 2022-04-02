import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  id: any = '';
  username: any = '';

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // console.log(params);
      this.id = params.get('id');
      this.username = params.get('username');
    });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
