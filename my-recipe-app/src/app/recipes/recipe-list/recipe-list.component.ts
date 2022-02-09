import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('test recipe 1', 'description to the recipe - 1', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg'),
    new Recipe('test recipe 2', 'description to the recipe - 2', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg'),
    new Recipe('test recipe 3', 'description to the recipe - 3', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  recipeSelected(selectedRecipe: Recipe){
    this.onRecipeSelected.emit(selectedRecipe);
  }
}
