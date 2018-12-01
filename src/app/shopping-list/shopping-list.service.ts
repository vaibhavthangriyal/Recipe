import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { httpservice } from '../shared/HTTPservice.service';
//import { httpservice } from '../shared/HTTPservice.service';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(
    //private httpService:httpservice
    ){}

  getIngredients() {
    return this.ingredients.slice();
  }

  fetchIngredient(index){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  //   this.httpService.postData(ingredient).subscribe(
  //    (response)=>console.log(response),
  //    (error)=> console.log(error)
  //  )
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
    
  }

  updateIngredient(index : number, newIngredient:Ingredient){
    this.ingredients[index] =  newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  DeleteIngredients(index:number){
    this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
  }
}
