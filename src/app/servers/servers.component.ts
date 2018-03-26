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
  serverCreated = false;
  servers = ['suu whoop server', 'og server'];
  showSecret = false;
  log = [];

  constructor() {
    // () => {} es lo mismo que function(){}
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
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
