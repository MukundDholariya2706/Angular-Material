import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hide = true;
  email = new FormControl('',[Validators.required, Validators.email]);

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'you must enter a mail';
    }

    return this.email.hasError('email') ? 'Not Valid email' : '';
  }

}
