import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  isLoading = signal<Boolean>(false);
  showLoader() {
    this.isLoading.set(true);
  }
  hideLoader() {
    this.isLoading.set(false);
  }
  // #showLoader = false;
  // showLoader() {
  //   this.#showLoader = true;
  // }
  // hideLoader() {
  //   this.#showLoader = false;
  // }
  // get isLoading() {
  //   return this.#showLoader;
  // }
}
