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
    // GETTING THE REQUIRED PARAMETERS
    this.route.paramMap.subscribe();
    //  use the snapshot if we don't have a scenario where the user can navigate back to the same component.
    // let id = this.route.snapshot.paramMap.get('id');

    // GETTING THE QUERY PARAMETERS
    this.route.queryParamMap.subscribe();

    this.service
      .getAll()
      .subscribe((followers) => (this.followers = followers));
  }
}
