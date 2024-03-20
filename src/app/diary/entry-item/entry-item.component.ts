import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  // @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() editEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  delete() {
    this.deleteEvent.emit(this.exerciseSet.id);
  }

  editEntry() {
    this.editEvent.emit(this.exerciseSet);
  }
  // newRep() {
  //   const reps = ++this.exerciseSet.reps;
  //   const newItem: ExerciseSet = {
  //     ...this.exerciseSet,
  //     reps,
  //   };
  //   this.newRepEvent.emit(newItem);
  // }
}
