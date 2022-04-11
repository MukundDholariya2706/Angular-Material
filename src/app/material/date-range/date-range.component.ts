import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocaleConfig } from 'ngx-daterangepicker-material/daterangepicker.config';


@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
})
export class DateRangeComponent implements OnInit {
  form!: FormGroup;
  locale: LocaleConfig = {
    format: 'YYYY-MM-DD',
    displayFormat: 'YYYY-MM-DD',
  };

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
