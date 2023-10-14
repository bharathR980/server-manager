import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Server } from './server.types';
import { dummyServerList } from './server.data';

@Injectable({
  providedIn: 'root'
})
export class ServerInfoService {

  private serverListSubject = new BehaviorSubject<Server[]>([]);
  serverList$ = this.serverListSubject.asObservable();

  constructor(
    // private http: HttpClient
  ) { }

  getServerList() {
    // this.http.get<Server[]>('/server-list').subscribe((data) => {
    //   this.serverListSubject.next(data);
    // });
    new Observable<Server[]>((observer) => {
      observer.next(dummyServerList);
      observer.complete();
    }).subscribe((data) => {
      this.serverListSubject.next(data);
    });
  }

  updateServerList(serverList:Server[]){
    this.serverListSubject.next(serverList);
  }

  addNewServer(server:Server){
    const currentServerList = this.serverListSubject.getValue();
    const updatedServerList = [server, ...currentServerList];
    this.serverListSubject.next(updatedServerList);
  }
}
