import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ExerciseSetsService } from './exercise-sets.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ExerciseSet } from '../interfaces/exercise-set';

describe('ExerciseSetsService', () => {
  let service: ExerciseSetsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseSetsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use the method addNewItem to add a new Entry', fakeAsync(() => {
    const fakeBody: ExerciseSet = {
      id: '1',
      date: new Date(),
      exercise: 'Deadlift',
      reps: 15,
      sets: 4,
    };
    service.addNewItem(fakeBody).subscribe((response) => {
      expect(response).toEqual(fakeBody);
    });
    const request = httpMock.expectOne((req) => {
      return req.method === 'POST';
    });
    request.flush(fakeBody);
    tick();
  }));
});
