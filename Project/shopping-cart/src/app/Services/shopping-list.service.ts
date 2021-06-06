import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  constructor() { }
  ingredientUpdated = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientUpdated.emit(this.ingredients.slice());
  }
  addingIngreidentsToShoppingListFromRecipe(ingredients:Ingredient[])
  {
      this.ingredients.push(...ingredients);
      this.ingredientUpdated.emit(this.ingredients.slice()); 
  }
}
