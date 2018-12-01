import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Page404Component } from './page404/page404.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { ProfileEditComponent } from '../Profile/profile-edit/profile-edit.component';
import { ProfileComponent } from '../Profile/profile/profile.component';
const appRoute:Routes = [
    //{ path:'', redirectTo:'signin', pathMatch: 'full'},
    { path:'', component:MainPageComponent ,pathMatch: 'full'},
    { path:'home', component:MainPageComponent },
    { path:'profile', component:ProfileComponent
    , children:[
        {path:'profile/:id',component:ProfileEditComponent}
    ]},
    { path:'recipes', loadChildren:'../recipes/recipe.module#RecipeModule'},
    { path:'404', component: Page404Component }
    //{ path:'**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule  {
    constructor(private currentRoute:ActivatedRoute, private router:Router){
    }
}