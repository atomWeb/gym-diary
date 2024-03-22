import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import {
  ExerciseSet,
  ExerciseSetList,
  ExerciseSetListAPI,
} from '../interfaces/exercise-set';
import { SkipLoading } from '../../loading-overlay/load.interceptor';

@Injectable(/*{
  providedIn: 'root',
}*/)
export class ExerciseSetsService {
  private httpClient = inject(HttpClient);
  private url = 'diary';
  // private url = 'http://localhost:3000/diary';
  // private setList?: ExerciseSetList;
  // constructor() {}

  getInitialList(): Observable<ExerciseSetListAPI> {
    const headers = new HttpHeaders().set('X-TELEMETRY', 'true');
    return this.httpClient.get<ExerciseSetListAPI>(this.url, { headers });
  }
  refreshList(): Observable<ExerciseSetListAPI> {
    return this.httpClient.get<ExerciseSetListAPI>(this.url);
  }

  addNewItem(item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url, item);
  }
  updateItem(id: string, item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }
  getItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.get<ExerciseSet>(`${this.url}/${id}`);
  }
  deleteItem(id: string): Observable<boolean> {
    console.log(id);
    return this.httpClient.delete<boolean>(`${this.url}/${id}`);
  }
  // getInitialList(): ExerciseSetList {
  //   this.setList = [
  //     { id: 1, date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
  //     { id: 2, date: new Date(), exercise: 'Squat', reps: 15, sets: 3 },
  //     { id: 3, date: new Date(), exercise: 'Barbell row', reps: 15, sets: 3 },
  //   ];
  //   return this.setList;
  // }

  // refreshList(): ExerciseSetList {
  //   this.setList = [
  //     { id: 1, date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
  //     { id: 2, date: new Date(), exercise: 'Squat', reps: 15, sets: 3 },
  //     { id: 3, date: new Date(), exercise: 'Barbell row', reps: 15, sets: 3 },
  //     { id: 4, date: new Date(), exercise: 'Leg Press', reps: 15, sets: 3 },
  //   ];
  //   return this.setList;
  // }

  // addNewItem(item: ExerciseSet): ExerciseSetList {
  //   if (this.setList) {
  //     this.setList = [...this.setList, item];
  //   } else {
  //     this.setList = [item];
  //   }`
  //   return this.setList;
  // }
  // addNewItem(item: ExerciseSet): Observable<ExerciseSet> {
  //   return this.httpClient.post<ExerciseSet>(this.url, item);
  // }
}
