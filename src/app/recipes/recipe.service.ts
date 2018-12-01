import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged =  new Subject<Recipe[]>();

  private recipes: Recipe[] = [  
    new Recipe(
      'Tandoori Chicken',
      'Chicken legs marinated in lemon juice, yogurt, and aromatic spices.',
      'https://truffle-assets.imgix.net/1b803a78-410-tandoorichicken-dishsquare2.jpg',
      [
        new Ingredient('vegetable oil', 1),
        new Ingredient('ground coriander', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService,
              private route:ActivatedRoute,
              private router:Router,
              ) {}

  fetchRecipeFromServer(recipe){
    console.log(recipe);
    this.recipes=recipe ;
    this.recipeChanged.next(this.recipes.slice());
  }            

  getRecipes() {
    return this.recipes.slice();
  }

  fetchRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
    
  }
  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
    if (confirm("Are You Sure You Want to Delete This Recipe?")) {
      this.recipes.splice(index,1);
      this.recipeChanged.next(this.recipes.slice());  
    }else{
      this.router.navigate(['this.route'],{relativeTo:this.route});
    }
  }
 

  
}
