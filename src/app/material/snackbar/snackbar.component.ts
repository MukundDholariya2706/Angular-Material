import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  openSnackBar(msg: string) {
    this.snackBar.open(msg);
  }

  openSnackBar2(msg: string, action: string | undefined) {
    let snackbarRef = this.snackBar.open(msg, action, { duration: 2000 });

    snackbarRef.afterDismissed().subscribe(() => {
      console.log('snackbar was dismissed');
    });

    snackbarRef.onAction().subscribe(() => {
      console.log('snackbar action triggerd');
    });
  }
}

