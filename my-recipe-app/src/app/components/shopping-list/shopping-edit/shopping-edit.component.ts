import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') ingredientNameElement: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountElement: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingredientName = this.ingredientNameElement.nativeElement.value;
    const ingredientAmount = this.ingredientAmountElement.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingredientName, ingredientAmount));
  }

}
