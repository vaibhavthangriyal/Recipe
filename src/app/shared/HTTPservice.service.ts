import { Http, Response, ResponseType } from "@angular/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map'; 
import { authService } from "../auth/auth.service";





@Injectable()
export class httpservice{
    url='https://book-ef560.firebaseio.com/recipe.json';
    constructor(private http:Http,
                private Rservice:RecipeService,
                private authService:authService,
                ){}
    postData( data:any ){
        const token = this.authService.getToken();
        //const headers = new Headers({'content-type':'application/json'});
        return this.http.post(this.url+"?auth="+token, data);
        
    }
    
    getData(){
        const token = this.authService.getToken();
         this.http.get(this.url+"?auth="+token).map(
            (response:Response)=>{ 
                if(response.json() === null){
                    console.log("nothing to fetch");
                }else{
                    console.log(response);
                    const fetchedRecipe:Recipe[] = response.json();
                    for(let recipe of fetchedRecipe){
                        if(!recipe['ingredients']){
                            recipe['ingredients'] = [];
                        }
                    }
                    return fetchedRecipe;
                }
            }
        )
                .subscribe(
                    (fetchedRecipe:Recipe[])=>{
                        this.Rservice.fetchRecipeFromServer(fetchedRecipe);
                        console.log(fetchedRecipe);
                    }
                );
            }

       
}
