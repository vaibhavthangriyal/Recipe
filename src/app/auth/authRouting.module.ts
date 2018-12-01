import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { RouterModule, Routes } from "@angular/router";

const AuthRoutes:Routes=[
    {path:'signin' ,component: SigninComponent},
    {path:'signup' ,component: SignupComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(AuthRoutes)
    ],
    exports:[RouterModule]
})
export class AuthRoutingModule{

}