import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe-item') recipe: Recipe;
  @Output() onRecipeSelected: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(){
    this.onRecipeSelected.emit();
  }
}
