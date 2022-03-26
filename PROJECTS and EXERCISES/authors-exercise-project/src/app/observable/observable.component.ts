import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  private readonly _students$: Observable<string[]> = of(['Ram', 'Rem', 'Rim']);

  constructor() {}

  ngOnInit(): void {
    this._students$.subscribe((data) => {
      console.log(data);
    });
  }
}
