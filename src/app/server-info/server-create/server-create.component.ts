import { Component } from '@angular/core';
import { Server } from '../server.types';
import { ServerInfoService } from '../server-info.service';
import { MatDialog } from '@angular/material/dialog';
import { ServerCreateDialogComponent } from '../server-create-dialog/server-create-dialog.component';

@Component({
  selector: 'server-create-btn',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.scss'],
})
export class ServerCreateComponent {
  newServer: Server = {} as Server;

  constructor(
    private serverInfoService: ServerInfoService,
    private dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ServerCreateDialogComponent, {
      width: '500px', // Adjust the width as needed
      data: this.newServer, // Pass data to the dialog
    });

    dialogRef.afterClosed().subscribe((result: Server | undefined) => {
      if (result) {
        this.serverInfoService.addNewServer(result);
      }
    });
  }
}
