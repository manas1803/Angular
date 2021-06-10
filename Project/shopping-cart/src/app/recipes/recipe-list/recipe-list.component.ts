import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[];

  constructor(private recipeService:RecipeService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  onNewRecipe(event){
    this.route.navigate(['/recipes','new']);
  }

}
