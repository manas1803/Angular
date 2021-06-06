import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../Services/shopping-list.service';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

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
}
