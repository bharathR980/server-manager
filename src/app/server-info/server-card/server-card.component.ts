import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Server } from '../server.types';

@Component({
  selector: 'server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.scss']
})
export class ServerCardComponent {
  @Input()
  server!: Server;
  editedServerInfo!: Server;

  @Output() updateServerInfo = new EventEmitter<Server>();
  @Output() deleteServerInfo = new EventEmitter();

  editMode: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if ('server' in changes) {
      this.editedServerInfo = this.server;
    }
  }

  update(){
    this.editedServerInfo.updatedAt = new Date().toString();
    this.updateServerInfo.emit(this.editedServerInfo);
    this.editMode = false;
  }

  deleteServer(){
    console.log('deleteServer');
    this.deleteServerInfo.emit({});
  }

  updateStatus(status:string):void {
    this.editedServerInfo.status = status;
    this.update();
  }
}
