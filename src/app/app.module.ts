import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './shared/app-routing.module';
import { Page404Component } from './shared/page404/page404.component';
import { RecipeService } from './recipes/recipe.service';
import { httpservice } from './shared/HTTPservice.service';
import { authService } from './auth/auth.service';
import { AuthGaurd } from './auth/auth-gaurd.service';
import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { AuthModule } from './auth/auth.module';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { BoxesComponent } from './main-page/boxes/boxes.component';
import { AboutComponent } from './main-page/about/about.component';
import { TeammemberComponent } from './main-page/teammember/teammember.component';
import { ContactusComponent } from './main-page/contactus/contactus.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { ProfileEditComponent } from './Profile/profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    Page404Component,
    MainPageComponent,
    BoxesComponent,
    AboutComponent,
    TeammemberComponent,
    ContactusComponent,
    ProfileComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    FormsModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipeService, httpservice, authService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
