import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TRIPPIN_BASE_URL } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class TrippinService {

  constructor(@Inject(TRIPPIN_BASE_URL) private baseUrl: string) { }

  public getPeople(nameFilter?: string) : Observable<any[]> {
    // Access the Trippin OData api here
    return of([1, 2, 3, 4, 5, 6]);
  }
}
