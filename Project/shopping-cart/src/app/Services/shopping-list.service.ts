import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  constructor() { }
  ingredientUpdated = new Subject<Ingredient[]>();
  editShoppingList = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredient(index:number){
    return this.ingredients[index];
  }
  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientUpdated.next(this.ingredients.slice());
  }
  addingIngreidentsToShoppingListFromRecipe(ingredients:Ingredient[])
  {
      this.ingredients.push(...ingredients);
      this.ingredientUpdated.next(this.ingredients.slice()); 
  }
  updateIngredients(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientUpdated.next(this.ingredients.slice());
  }
  deleteIngredients(index:number)
  {
    this.ingredients.splice(index,1);
    this.ingredientUpdated.next(this.ingredients.slice());
  }
}
