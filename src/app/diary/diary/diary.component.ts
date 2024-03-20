import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListEntriesComponent } from '../list-entries/list-entries.component';
import { NewItemButtonComponent } from '../new-item-button/new-item-button.component';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-diary',
  standalone: true,
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css',
  //providers: [ExerciseSetsService], // Lo he metido en el app.config
  imports: [ListEntriesComponent, NewItemButtonComponent],
})
export default class DiaryComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  //exerciseList = this.exerciseSetsService.getInitialList();
  exerciseList!: ExerciseSetList;
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.data.subscribe(({ diaryApi }) => {
      this.exerciseList = diaryApi.items;
    });
  }
  // constructor(private router: Router) {}
  // ngOnInit(): void {
  //   this.exerciseSetsService
  //     .getInitialList()
  //     .subscribe((dataApi) => (this.exerciseList = dataApi.items));
  // }
  // constructor(private exerciseSetsService: ExerciseSetsService) {}

  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe((dataApi) => (this.exerciseList = dataApi.items));
  }
  addExercise(newSet: ExerciseSet) {
    this.router.navigate(['/entry']);
    // this.exerciseSetsService
    //   .addNewItem(newSet)
    //   .subscribe((_) => this.newList());
  }
  deleteItem(id: string) {
    this.exerciseSetsService.deleteItem(id).subscribe(() => {
      this.exerciseList = this.exerciseList.filter(
        (exerciseSet) => exerciseSet.id !== id
      );
    });
  }
  editEntry(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.router.navigate([`/entry/${id}`]);
  }
  // newRep(updateSet: ExerciseSet) {
  //   const id = updateSet.id ?? '';
  //   this.exerciseSetsService.updateItem(id, updateSet).subscribe();
  // }
  // newList() {
  //   this.exerciseList = this.exerciseSetsService.refreshList();
  // }

  // addExercise(newSet: ExerciseSet) {
  //   this.exerciseList = this.exerciseSetsService.addNewItem(newSet);
  // }

  // deleteItem(id: number) {
  //   this.exerciseList = this.exerciseList.filter((item) => item.id !== id);
  // }

  // newRep(exerciseSet: ExerciseSet) {
  //   const id = exerciseSet.id;
  //   const i = this.exerciseList.findIndex((item) => item.id === id);
  //   if (i >= 0) {
  //     this.exerciseList[i] = { ...exerciseSet };
  //   }
  // }
  // // itemTrackBy(index: number, item: ExerciseSet) {
  //   return item.id;
  // }
  logout() {
    this.authService.logout();
    this.router.navigate(['./login']);
  }
}
