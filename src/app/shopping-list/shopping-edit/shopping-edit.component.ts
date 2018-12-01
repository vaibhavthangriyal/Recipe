import { Component,  OnInit,  ViewChild, OnDestroy } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor(private slService: ShoppingListService) { }

  @ViewChild('mainForm') mainForm:NgForm;

  editingSubscription:Subscription;
  editMode = false;
  editedItemInedx:number;
  editedItem:Ingredient;
  ngOnInit() {
    this.editingSubscription = this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemInedx = index;
        this.editMode = true;
        this.editedItem = this.slService.fetchIngredient(index);
        this.mainForm.setValue({
          nameInput: this.editedItem.name,
          amountInput: this.editedItem.amount
        })
      }
    );
  }
  
  onAddItem(  ) {
    const newvalue = this.mainForm.value;
    const newIngredient = new Ingredient(newvalue.nameInput, newvalue.amountInput);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemInedx, newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  onClear(){
    this.mainForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.editingSubscription.unsubscribe();
  }
}
