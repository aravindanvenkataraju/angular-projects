import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = 'enter server name';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onServerCreated() {
    this.serverCreationStatus =
      'New Server created successfully! Name is ' + this.serverName;
    this.serverName = 'enter server name';
  }
  onUpdateServerName(event: any) {
    //console.log(event);
    this.serverName = event.target.value;
  }
  ngOnInit(): void {}
}
