import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  public nameFilter = new FormControl("");
  // FormControl -> angular representation of control in a form.
  // eg minlength, starting values, valid entries an so on. bridging html and angular implementation 
  public input$ = this.nameFilter.valueChanges.pipe(
    tap(
      (f) => console.log(f)
    )
  );
  // valueChanges - observer to take note of changes
}
