import { Component, Input, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { multipleValidator } from './custom-validation';
import { ExerciseSet } from '../interfaces/exercise-set';

@Component({
  selector: 'app-new-entry-form-reactive',
  standalone: true,
  providers: [ExerciseSetsService],
  imports: [CommonModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrl: './new-entry-form-reactive.component.css',
})
export default class NewEntryFormReactiveComponent implements OnInit {
  // public entryForm!: FormGroup;
  // private formBuilder = inject(FormBuilder);
  @Input('id') entryId?: string;
  // private entryId?: string | null;
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    sets: [0, [Validators.required, Validators.min(0), multipleValidator(2)]],
    reps: [0, [Validators.required, Validators.min(0), multipleValidator(3)]],
  });
  ngOnInit(): void {
    this.titleService.setTitle('Reactive Form');
    // this.entryId = this.route.snapshot.paramMap.get('id');
    if (this.entryId) {
      this.exerciseSetsService
        .getItem(this.entryId)
        .subscribe((entry) => this.updateForm(entry));
    }
  }
  updateForm(entry: ExerciseSet): void {
    let { id: _, ...entryForm } = entry;
    this.entryForm.setValue(entryForm);
  }
  // ngOnInit() {
  //   this.entryForm = this.formBuilder.group({
  //     date: ['', Validators.required],
  //     exercise: ['', Validators.required],
  //     sets: ['', [Validators.required, Validators.min(0), multipleValidator(2)]],
  //     reps: ['', [Validators.required, Validators.min(0), multipleValidator(3)]],
  //   });
  // }
  newEntry() {
    if (this.entryForm.valid) {
      const newEntry = { ...this.entryForm.value };
      if (this.entryId) {
        this.exerciseSetsService
          .updateItem(this.entryId, newEntry)
          .subscribe((entry) => this.router.navigate(['/home']));
      } else {
        this.exerciseSetsService
          .addNewItem(newEntry)
          .subscribe((entry) => this.router.navigate(['/home']));
      }
    }
  }
}
