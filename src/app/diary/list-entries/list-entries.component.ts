import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EntryItemComponent } from '../entry-item/entry-item.component';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';

@Component({
  selector: 'app-list-entries',
  standalone: true,
  imports: [EntryItemComponent],
  templateUrl: './list-entries.component.html',
  styleUrl: './list-entries.component.css',
})
export class ListEntriesComponent {
  @Input() exerciseList!: ExerciseSetList;
  @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();
}
