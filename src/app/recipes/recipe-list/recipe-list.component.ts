import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { httpservice } from '../../shared/HTTPservice.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router:Router,
              private route:ActivatedRoute,
              private httpservice:httpservice) {
              }


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[]) => {
        this.recipes = recipes;
      }
    )
  }
  onNewButton(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
  onFetchRecipe(){
    this.httpservice.getData();
  }
}
