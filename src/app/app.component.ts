import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Materials';
  numbers: any = [];

  
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    for (let i = 0; i < 100; i++) {
      this.numbers.push(i);
    }

    console.log('this.platformId :>> ', this.platformId);
    if(isPlatformBrowser(this.platformId)){
      // run on local
    } else {
      // run on server
    }
  }
}
