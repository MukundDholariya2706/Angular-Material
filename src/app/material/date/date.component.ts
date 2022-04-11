import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  minDate = new Date();
  maxDate = new Date(2022,3, 20);

  dateFilter = (date: any) => {
    const day = date.getDay();
    return day != 0 && day != 6;
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  
}
