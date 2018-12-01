import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { AuthGaurd } from "../auth/auth-gaurd.service";

const shoppingRoutes = [
    { path:'shopping-list', component: ShoppingListComponent, canActivate:[AuthGaurd] }
];

@NgModule({
    imports:[
        RouterModule.forChild(shoppingRoutes)
    ],
    exports:[RouterModule]
})
export class ShoppinglistRoutingModule{}