import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe:Recipe;
  name:string ='';
  ImagePath:string ='';
  description:string ='';

  recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,
              private rlService:RecipeService,
              private router:Router,
                ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id =+params['id'];
        this.editMode = params['id'] != null;
        this.formInit();
      }
    );
  }

  formInit(){
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      this.recipe = this.rlService.fetchRecipe(this.id);
      this.name = this.recipe.name;
      this.description = this.recipe.description;
      this.ImagePath = this.recipe.imagePath;
      if(this.recipe['ingredients']){
        for(let ingredeint of this.recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredeint.name, Validators.required),
              'amount': new FormControl(ingredeint.amount, [Validators.required, Validators.pattern('^(0?[1-9]|[1-9][0-9])$')])
            })
          )}
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.name, Validators.required),
      'imagepath': new FormControl(this.ImagePath, Validators.required),
      'description': new FormControl(this.description,Validators.required),
      'thumbnail':new FormControl(this.ImagePath),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredeint(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagepath'],
      this.recipeForm.value['ingredients'])
    if(this.editMode){
      this.rlService.updateRecipe(this.id, newRecipe)
    }else{
      this.rlService.addRecipe(newRecipe);
    }
    this.router.navigate(['../'],{relativeTo:this.route});
  }

 
  onCancel(){
    if (confirm("You Sure You Want to Exit")) {
      this.router.navigate(['../'],{relativeTo:this.route});
    } 
  }

  onDeleteIngredient(index:number){
    if(confirm("You Sure you want to delete this ingredeint?")){
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
  }
}
