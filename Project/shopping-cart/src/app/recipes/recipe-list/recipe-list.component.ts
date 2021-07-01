import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from 'src/app/Services/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[] =[];
  subscription:Subscription;
  constructor(private recipeService:RecipeService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.recipeService.recipeChanged.subscribe(
      (recipeArray:Recipe[])=>{
        this.recipes = recipeArray;
      }
    )
    this.recipes = this.recipeService.getRecipe();
  }

  onNewRecipe(event){
    this.route.navigate(['/recipes','new']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
