import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  edtingIndex:number;
  editingSubscription:Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
    this.editingSubscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.edtingIndex = index;
      }
    )
  }

  onClickItem(index:number){
    this.slService.startedEditing.next(index);
  }

  onDelete(index:number){
    if (confirm("Are you sure? Delete this Ingredient?")) {
      this.slService.DeleteIngredients(index);
    }else{
      console.log('asd');
    }
  }

  ngOnDestroy(){
    this.editingSubscription.unsubscribe();
  }
}
