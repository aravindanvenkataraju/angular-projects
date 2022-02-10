import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/recipes/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') ingredientNameElement: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountElement: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingredientName = this.ingredientNameElement.nativeElement.value;
    const ingredientAmount = this.ingredientAmountElement.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(ingredientName, ingredientAmount));
  }

}
