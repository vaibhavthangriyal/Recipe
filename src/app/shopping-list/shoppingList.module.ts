import { NgModule } from '@angular/core'

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppinglistRoutingModule } from './shoppingRouting.modules';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShoppinglistRoutingModule
    ],
})
export class ShoppingListModule{

}