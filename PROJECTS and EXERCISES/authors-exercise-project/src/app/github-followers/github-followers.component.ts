import { combineLatest, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
      // combined is an array w/ 2 elements, first is the latest paramMap object, secode is the latest queryParamMap object.
    ]).subscribe((combined: any) => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      this.service
        .getAll()
        .subscribe((followers) => (this.followers = followers));
    });
  }
}

// NOTE: as you can see, there are multiple subscribe method, you can use switchMap to make it cleaner.
// NOTE: see file number 10
