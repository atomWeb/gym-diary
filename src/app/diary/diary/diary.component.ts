import { Component } from '@angular/core';
import { ListEntriesComponent } from '../list-entries/list-entries.component';
import { NewItemButtonComponent } from '../new-item-button/new-item-button.component';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';

@Component({
  selector: 'app-diary',
  standalone: true,
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css',
  imports: [ListEntriesComponent, NewItemButtonComponent],
})
export default class DiaryComponent {
  exerciseList: ExerciseSetList = [
    { id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
    { id: '2', date: new Date(), exercise: 'Squat', reps: 15, sets: 3 },
    { id: '3', date: new Date(), exercise: 'Barbell row', reps: 15, sets: 3 },
  ];
  newList() {
    this.exerciseList = [
      { id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
      { id: '2', date: new Date(), exercise: 'Squat', reps: 15, sets: 3 },
      { id: '3', date: new Date(), exercise: 'Barbell row', reps: 15, sets: 3 },
      { id: '4', date: new Date(), exercise: 'Leg Press', reps: 15, sets: 3 },
      { id: '5', date: new Date(), exercise: 'Leg Press2', reps: 15, sets: 3 },
    ];
  }
  addExercise(newSet: ExerciseSet) {
    this.exerciseList.push(newSet);
  }
  deleteItem(id: string) {
    this.exerciseList = this.exerciseList.filter((item) => item.id !== id);
  }
  newRep(exerciseSet: ExerciseSet) {
    const id = exerciseSet.id;
    const i = this.exerciseList.findIndex((item) => item.id === id);
    if (i >= 0) {
      this.exerciseList[i] = { ...exerciseSet };
    }
  }
  // itemTrackBy(index: number, item: ExerciseSet) {
  //   return item.id;
  // }
}
