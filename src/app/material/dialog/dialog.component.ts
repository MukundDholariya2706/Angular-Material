import { DialogExampleComponent } from './../dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Max'}});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`dialog resule: ${result}`);
    });
  }
}
