import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  serverCreated = false;
  servers = ['Testuser','Testuser 1'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
  }

  ngOnInit() {
    
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created' + ' ' + this.serverName;
  }
  onUpdateServerName(event){
    this.serverName = event.target.value;
  }
}
