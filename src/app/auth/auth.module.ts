import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./authRouting.module";

@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
    exports:[]
})
export class AuthModule{}