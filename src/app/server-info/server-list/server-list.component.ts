import { Component } from '@angular/core';
import { ServerInfoService } from '../server-info.service';
import { Server } from '../server.types';

@Component({
  selector: 'server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
})
export class ServerListComponent {
  serverList: Server[] = [];

  constructor(private serverInfoService: ServerInfoService) {}

  ngOnInit(): void {
    this.initiateData();
    this.subscriptionMapping();
  }

  subscriptionMapping(): void {
    this.serverInfoService.serverList$.subscribe((data) => {
      this.serverList = data;
    });
  }

  initiateData(): void {
    this.serverInfoService.getServerList();
  }

  onUpdateServerInfo(serverInfo: Server, index: number): void {
    const newServerList = [...this.serverList];
    newServerList[index] = serverInfo;
    this.serverInfoService.updateServerList(newServerList);
  }

  deleteServer(index: number): void {
    console.log(index);
    
    const newServerList = [...this.serverList];
    newServerList.splice(index, 1);
    console.log(newServerList);
    
    this.serverInfoService.updateServerList(newServerList);
  }
}
