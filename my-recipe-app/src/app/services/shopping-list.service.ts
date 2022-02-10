import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[]= [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 20),
        new Ingredient('PineApple', 22),
        new Ingredient('Avocado', 12),
        new Ingredient('Lime', 7),
        new Ingredient('Mandarin', 9)
      ];
    
    ingredientAdded: EventEmitter<Ingredient> = new EventEmitter();
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit();
    }
}