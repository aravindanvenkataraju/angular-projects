import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 20),
    new Ingredient('PineApple', 22),
    new Ingredient('Avocado', 12),
    new Ingredient('Lime', 7),
    new Ingredient('Mandarin', 9),
  ];

  ingredientAdded: Subject<Ingredient | null> = new Subject();
  editingIngredient: Subject<number> = new Subject();
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientAdded.next(null);
  }

  getIngredientAtIndex(index: number) {
    return this.ingredients[index];
  }

  updateIngredientAtIndex(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientAdded.next(ingredient);
  }
}
