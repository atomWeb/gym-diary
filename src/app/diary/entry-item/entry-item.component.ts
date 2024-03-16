import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ExerciseSet } from '../interfaces/exercise-set';

@Component({
  selector: 'app-entry-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './entry-item.component.html',
  styleUrl: './entry-item.component.css',
})
export class EntryItemComponent {
  @Input('exercise-set') exerciseSet!: ExerciseSet;
}
