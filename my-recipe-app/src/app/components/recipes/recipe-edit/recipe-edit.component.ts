import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
    private recipeService: RecipeService
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
      name: new FormControl(this.editMode ? recipe.name : null),
      imagePath: new FormControl(this.editMode ? recipe.imagePath : null),
      description: new FormControl(this.editMode ? recipe.description : null),
    });
  }
  submitForm() {
    console.log(this.recipeForm);
  }
}
