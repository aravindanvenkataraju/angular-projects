import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onServerCreated() {
    this.serverCreationStatus =
      'New server created. Server Name: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    setTimeout(() => {
      this.serverCreated = false;
    }, 3000);
    this.serverName = '';
  }
  onUpdateServerName(event: any) {
    //console.log(event);
    this.serverName = event.target.value;
  }
  ngOnInit(): void {}
}
