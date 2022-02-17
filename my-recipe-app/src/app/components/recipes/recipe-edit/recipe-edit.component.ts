import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  idx: number;
  editMode: boolean;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = parseInt(params['id']);
      this.editMode = params['id'] != null;
    });
    this.initForm();
  }

  private initForm() {
    let recipe;
    if (this.editMode) {
      recipe = this.recipeService.getRecipeAtIndex(this.idx);
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(this.editMode ? recipe.name : null, [
        Validators.required,
      ]),
      imagePath: new FormControl(this.editMode ? recipe.imagePath : null, [
        Validators.required,
      ]),
      description: new FormControl(this.editMode ? recipe.description : null, [
        Validators.required,
      ]),
      ingredients: new FormArray(
        this.editMode
          ? recipe.ingredients
            ? recipe.ingredients.map((ingredient) => {
                console.log(ingredient);
                return new FormGroup({
                  name: new FormControl(ingredient.name, [Validators.required]),
                  amount: new FormControl(ingredient.amount, [
                    Validators.required,
                    Validators.min(0),
                  ]),
                });
              })
            : []
          : []
      ),
    });
  }
  submitForm() {
    if (this.editMode) {
      this.recipeService.updateRecipeAtIndex(this.idx, this.recipeForm.value);
      this.router.navigate(['../'], {
        relativeTo: this.route,
      });
    } else {
      let newIndex = this.recipeService.addRecipe(this.recipeForm.value);
      this.router.navigate(['../', newIndex], {
        relativeTo: this.route,
      });
    }
  }

  get ingredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIndredientControls() {
    (<FormArray>this.recipeForm.get('ingredients')).insert(
      0,
      new FormGroup({
        name: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [Validators.required, Validators.min(0)]),
      })
    );
  }
  cancelChanges() {
    this.router.navigate(['../'], {
      relativeTo: this.route,
    });
  }
  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
