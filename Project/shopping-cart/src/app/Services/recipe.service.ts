import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingService:ShoppingListService) { }
  recipeChanged= new Subject<Recipe[]>();
  private recipes:Recipe[] = [];
  getRecipe(){
    return this.recipes.slice();
  }
  getRecipeFromId(id:number){
    return this.recipes.slice()[id];
  }
  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  addIngredients(ingredients:Ingredient[]){
    this.shoppingService.addingIngreidentsToShoppingListFromRecipe(ingredients);
  }
  updateRecipe(index:number,recipe:Recipe){
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(id:number){
    this.recipes.splice(id,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
