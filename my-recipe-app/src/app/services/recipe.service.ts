import { EventEmitter } from "@angular/core";
import { Recipe } from "../models/recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('test recipe 1', 'description to the recipe - 1', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg'),
        new Recipe('test recipe 2', 'description to the recipe - 2', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg'),
        new Recipe('test recipe 3', 'description to the recipe - 3', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg')
      ];
    
    recipeSelected: EventEmitter<Recipe> = new EventEmitter();

    getRecipes(){
        return this.recipes.slice();
    }

    

}