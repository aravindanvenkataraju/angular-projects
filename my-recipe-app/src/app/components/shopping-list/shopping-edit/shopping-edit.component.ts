import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingEditForm', { static: false }) shoppingEditForm: NgForm;
  editingIngredientSubscription: Subscription;
  editingIngredientIndex: number;
  editingIngredient: Ingredient;
  newIngredient: boolean = true;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editingIngredientSubscription =
      this.shoppingListService.editingIngredient.subscribe(
        (ingredientIndex: number) => {
          this.editingIngredientIndex = ingredientIndex;
          this.newIngredient = false;
          this.editingIngredient =
            this.shoppingListService.getIngredientAtIndex(ingredientIndex);
          this.shoppingEditForm.setValue({
            ingredientName: this.editingIngredient.name,
            ingredientAmount: this.editingIngredient.amount,
          });
        }
      );
  }

  ngOnDestroy(): void {
    this.shoppingListService.editingIngredient.unsubscribe();
  }

  submitForm(shoppingEditForm: NgForm) {
    const formValue = shoppingEditForm.value;
    const newIngredient = new Ingredient(
      formValue.ingredientName,
      formValue.ingredientAmount
    );
    if (this.newIngredient) {
      this.shoppingListService.addIngredient(newIngredient);
    } else {
      this.shoppingListService.updateIngredientAtIndex(
        this.editingIngredientIndex,
        newIngredient
      );
    }
    this.clearForm();
  }

  clearForm() {
    this.newIngredient = true;
    this.shoppingEditForm.reset();
  }

  deleteIngredient() {
    if (!this.newIngredient) {
      this.shoppingListService.removeIngredientAtIndex(
        this.editingIngredientIndex
      );
    }
    this.clearForm();
  }
}
