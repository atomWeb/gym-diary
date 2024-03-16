import { Component } from '@angular/core';
import { EntryItemComponent } from '../entry-item/entry-item.component';
import { ExerciseSetList } from '../interfaces/exercise-set';

@Component({
  selector: 'app-diary',
  standalone: true,
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css',
  imports: [EntryItemComponent],
})
export default class DiaryComponent {
  exerciseList: ExerciseSetList = [
    { id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
    { id: '2', date: new Date(), exercise: 'Squat', reps: 15, sets: 3 },
    { id: '3', date: new Date(), exercise: 'Barbell row', reps: 15, sets: 3 },
  ];
}
