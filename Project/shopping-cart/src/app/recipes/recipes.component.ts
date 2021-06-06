import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../Services/recipe.service';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() 
  {
    this.recipeService.getRecipeSelected().subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
