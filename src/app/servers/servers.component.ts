import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'BIG RED FOX';
  username = '';
  serverCreationStatus = 'No server was created!';
  allowClickButton = false;

  constructor() {
    // () => {} es lo mismo que function(){}
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! The name is: ' + this.serverName;
  }

  resetUsername() {
    this.username = '';
    this.allowClickButton = false;
  }

  verifyButton() {
    this.allowClickButton = (this.username !== '');
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
