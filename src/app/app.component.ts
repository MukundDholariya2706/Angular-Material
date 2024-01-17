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
    private update: SwUpdate
  ) // private checkupdateService: CheckupdateService
  {
    console.log(
      'update.isEnabled, !update.isEnabled :>> ',
      update.isEnabled,
      !update.isEnabled
    );

    this.update.checkForUpdate().then((res) => {
      if (res) window.location.reload();
    });

    if (this.update.isEnabled) {
      this.update.available.subscribe((res: any) => {
        console.log('res :>> ', res);
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }

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
