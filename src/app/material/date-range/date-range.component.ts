import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
})
export class DateRangeComponent implements OnInit {
  form!: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selected: [{
        startDate: '',
        endDate: ''
      }, Validators.required],
    });

  }

  ngOnInit() {}

  submit() {
    console.log(this.form.value);
  }
  
}
