import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsAddedSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsAddedSub =
      this.shoppingListService.ingredientAdded.subscribe(
        (ingredient: Ingredient) => {
          this.ingredients = this.shoppingListService.getIngredients();
        }
      );
  }

  selectItem(ingredientIndex: number) {
    this.shoppingListService.editingIngredient.next(ingredientIndex);
  }

  ngOnDestroy(): void {
    this.ingredientsAddedSub.unsubscribe();
  }
}
