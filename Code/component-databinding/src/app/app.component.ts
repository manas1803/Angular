import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'TestServer',content:'Just a test!'}];
  oddNumbers : number[] = [];
  evenNumbers : number[] = [];  
  adminName;
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }
    
    onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
     }
    onGameStart(num:number){
       if(num%2===0)
          this.evenNumbers.push(num);
       else
          this.oddNumbers.push(num);
    }
    adminUser(){
    }
}
