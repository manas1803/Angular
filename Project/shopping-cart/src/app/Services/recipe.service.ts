import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingService:ShoppingListService) { }
  private recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = 
  [
    new Recipe(
      'Chili Chicken', 
      'Chili Chicken is the best starter', 
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg',
      [new Ingredient('Chicken',1),new Ingredient('spring onion',1),new Ingredient('green chillies',4)]
      ),
    new Recipe(
      'Masala Dosa', 
      'Best Light Fast Food', 
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/06/masala-dosa-1.jpg',
      [new Ingredient('Flour',2),new Ingredient('Potato',2),new Ingredient('coconut',1)])
  ];
  getRecipe(){
    return this.recipes.slice();
  }
  getRecipeSelected(){
    return this.recipeSelected;
  }
  getRecipeFromId(id:number){
    return this.recipes.slice()[id];
  }
  addIngredients(ingredients:Ingredient[]){
    this.shoppingService.addingIngreidentsToShoppingListFromRecipe(ingredients);
  }
}
