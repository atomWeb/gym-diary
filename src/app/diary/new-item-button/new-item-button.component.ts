import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';

@Component({
  selector: 'app-new-item-button',
  standalone: true,
  imports: [],
  templateUrl: './new-item-button.component.html',
  styleUrl: './new-item-button.component.css',
})
export class NewItemButtonComponent {
  @Output() newExerciseEvent = new EventEmitter<ExerciseSet>();

  addNewExercise() {
    const id =  (Math.floor(Math.random() * (100 - 9 + 1)) + 9).toString();  // Math.floor(Math.random() * (100 - 9 + 1)) + 9;
    const date = new Date();
    const reps = 10;
    const sets = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
    const exercise = 'Leg Press' + sets;
    const newExerciseSet: ExerciseSet = { id, date, reps, sets, exercise };
    this.newExerciseEvent.emit(newExerciseSet);
  }

}
