import { SwUpdate } from '@angular/service-worker';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CheckupdateService } from './service/checkupdate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Materials';
  numbers: any = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient,
    private update: SwUpdate,
    private checkupdateService: CheckupdateService
  ) {
    // for (let i = 0; i < 100; i++) {
    //   this.numbers.push(i);
    // }
    try {
      if (!update.isEnabled) return;
      this.update.checkForUpdate().then((res) => {
        console.log('Update AppComponent :>> ', res);
      });
    } catch (e) {}

    console.log('this.platformId :>> ', this.platformId);
    if (isPlatformBrowser(this.platformId)) {
      // run on local
    } else {
      // run on server
    }

    this.getData();
  }

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        console.log('res :>> ', res);
      });
  }
}
