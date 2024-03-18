import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { multipleValidator } from './custom-validation';

@Component({
  selector: 'app-new-entry-form-reactive',
  standalone: true,
  providers: [ExerciseSetsService],
  imports: [CommonModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrl: './new-entry-form-reactive.component.css',
})
export default class NewEntryFormReactiveComponent {
  // public entryForm!: FormGroup;
  // private formBuilder = inject(FormBuilder);
  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    sets: [0, [Validators.required, Validators.min(0), multipleValidator(2)]],
    reps: [0, [Validators.required, Validators.min(0), multipleValidator(3)]],
  });
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
      this.exerciseSetsService
        .addNewItem(newEntry)
        .subscribe((entry) => this.router.navigate(['/home']));
    }
  }
}
