import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-exercise',
  templateUrl: './like-exercise.component.html',
  styleUrls: ['./like-exercise.component.css'],
})
export class LikeExerciseComponent {
  @Input() isActive: boolean = false;
  @Input() likeCount!: number;

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.likeCount++ : this.likeCount--;

    console.log(this.isActive, this.likeCount);
  }
}
