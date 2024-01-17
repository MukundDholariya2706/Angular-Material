import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { concat, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckupdateService {

  constructor(appRef: ApplicationRef, update: SwUpdate) {
    console.log(' :>> ',update.isEnabled );
    if(!update.isEnabled) return;
    const appIsStable$ = appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$,everySixHours$);

      everySixHoursOnceAppIsStable$.subscribe(() => {
        update.checkForUpdate().then(res => {
          if(res){
            console.log('update CheckupdateService :>> ', res);
          }
        })
      })
   }
}
