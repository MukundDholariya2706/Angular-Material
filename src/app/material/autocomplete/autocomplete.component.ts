import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)
    );
  }

  options: string[] = ['Angular', 'React', 'Vue', 'Django'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' },
  ];

  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  displayFn(subject: { name: any }) {
    return subject ? subject.name : undefined;
  }
}
