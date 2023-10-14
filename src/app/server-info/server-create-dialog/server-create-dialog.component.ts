import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Server } from '../server.types';

@Component({
  selector: 'app-server-create-dialog',
  templateUrl: './server-create-dialog.component.html',
  styleUrls: ['./server-create-dialog.component.scss'],
})
export class ServerCreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ServerCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Server
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCreateClick(): void {
    console.log(this.data, ' onCreateClick');
    this.data.updatedAt = new Date().toString();
    this.dialogRef.close(this.data);
  }
}
