import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Briyani',
      'Aromatic spicy food',
      'https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style.jpg'
    ),
    new Recipe(
      'Rasgulla',
      'Rasgulla is an Indian syrupy dessert popular in the Indian subcontinent and regions with South Asian diaspora.',
      'https://image.shutterstock.com/z/stock-photo-rasagulla-diwali-sweets-popular-east-indian-sweet-made-of-cottage-cheese-and-sugar-syrup-500532919.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
