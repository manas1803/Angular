import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../Services/recipe.service';

@Injectable()
export class DataServiceService {
  error=null;
  apiUrl = 'https://recipebookangular-a83ef-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http:HttpClient,private recipeService:RecipeService) { }
  storeRecipe()
  {
    const recipe = this.recipeService.getRecipe();
    this.http.put(this.apiUrl,recipe).subscribe(responseData=>{
      console.log(responseData);
    },error=>{
      this.error = error;
    })
  }
  fetchRecipe()
  {
    this.http.get<Recipe[]>(this.apiUrl).subscribe(responseData=>{
      this.recipeService.setRecipes(responseData);
    });
  }
}
