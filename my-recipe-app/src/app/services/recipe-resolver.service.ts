import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length > 0) {
      return recipes;
    } else {
      return this.recipeService.fetchRecipes();
    }
  }
}
