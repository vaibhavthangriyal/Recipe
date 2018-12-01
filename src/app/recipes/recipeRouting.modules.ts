import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { AuthGaurd } from "../auth/auth-gaurd.service";
import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "../recipe/recipe-start/recipe-start.component";


const recipeRoutes:Routes=[
    { path:'', component: RecipesComponent, canActivate:[AuthGaurd], children: [
        { path:'', component:RecipeStartComponent },
        { path: 'new', component:RecipeEditComponent },
        { path:':id', component: RecipeDetailComponent},
        { path: ':id/edit', component:RecipeEditComponent }
    ]},
]

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes),
    ],
    exports:[RouterModule]
})
export class RecipeRoutingModule{
}