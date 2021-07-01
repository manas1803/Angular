import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number

  constructor(private recipeService:RecipeService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() 
  {
    this.activeRoute.params.subscribe(
      (params:Params)=>{
         this.id = +params['id'];
         this.recipe = this.recipeService.getRecipeFromId(this.id);
      }
    )
    
  }
  addIngredientsToShoppingList(e){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
  onEditRecipe(event){
    this.route.navigate(['edit'],{relativeTo:this.activeRoute});
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['../',{relativeTo:this.activeRoute}]);
  }
}
