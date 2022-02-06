import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'description to the recipe', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg'),
    new Recipe('test recipe', 'description to the recipe', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg'),
    new Recipe('test recipe', 'description to the recipe', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
