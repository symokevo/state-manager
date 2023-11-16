import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrippinService {

  constructor() { }

  public getPeople(nameFilter?: string) : Observable<any[]> {
    // Access the Trippin api Data here
    return of([1, 2, 3, 4, 5, 6]);
  }
}
