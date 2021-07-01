import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from '../Services/shopping-list.service';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  editShoppingList:Subject<number>;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() 
  {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientUpdated.subscribe(
      (ingrident:Ingredient[])=>{
        this.ingredients = ingrident;
      }
    )
  }
  onEditList(id:number){
    this.shoppingService.editShoppingList.next(id);
  }
}
