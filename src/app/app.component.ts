import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Materials';
  numbers: any = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.numbers.push(i);
    }
  }
}
