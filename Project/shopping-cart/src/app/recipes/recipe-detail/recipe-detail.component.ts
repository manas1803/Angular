import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() 
  {
    this.recipeService.getRecipe();
  }
  addIngredientsToShoppingList(e){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
