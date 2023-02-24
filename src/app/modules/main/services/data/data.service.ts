import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  nameEvent$ = new EventEmitter<string>();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
