import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  defaultEnableAddServers: boolean = true;
  defaultServerCreationStatus: string = 'Ready to create new server!';
  enableAddServers: boolean = this.defaultEnableAddServers;
  serverCreationStatus: string = this.defaultServerCreationStatus;
  newServerName: string = null;
  serverCreated: boolean = false;
  constructor() {
    this.enableAddServers = false;
    this.setActionTimer();
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreationStatus = 'New server created! new server name is '+this.newServerName;
    this.enableAddServers = false;
    this.newServerName = null;
    this.serverCreated = true;
    this.setActionTimer();
  }

  onServerNameChange(event: InputEvent) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  }

  setActionTimer() {
    setTimeout(() => {
      this.enableAddServers = this.defaultEnableAddServers;;
      this.serverCreationStatus = this.defaultServerCreationStatus;
      this.serverCreated = false;
    }, 2000);
  }

}
