import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataService:DataServiceService){}
  savingData(){
    this.dataService.storeRecipe();
  }
  fetchData(){
    this.dataService.fetchRecipe();
  }
}
