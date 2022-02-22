import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Kuska Biryani-Kuska Rice',
      `Kuska is a plain biryani without vegetables and meat. 
         It is easy to make and tastes super delicious.
         It is so good that nothing stays on your plate. 
         It can be paired with onion raita or mixed vegetable raita, potato chips and papads. 
         Even this simple Brinjal chops side dish also goes well with kuska rice.`,
      'https://www.padhuskitchen.com/wp-content/uploads/2021/11/Kuska-Kuska-biryani.jpg',
      [
        new Ingredient('Basmati rice', 1),
        new Ingredient('Oil ', 2),
        new Ingredient('Ghee ', 1),
        new Ingredient('Onion (chopped lengthwise)', 1),
        new Ingredient('Tomato (small)', 1),
        new Ingredient('Salt needed', 1),
        new Ingredient('Tomato (small)', 1),
        new Ingredient('Mint leaves', 1),
        new Ingredient('Coriander leaves', 1),
        new Ingredient('Thick curd', 2),
        new Ingredient('Coriander leaves', 2),
      ]
    ),
    new Recipe(
      'Besanwali Bhindi-Besan Bhindi Masala',
      `Besanwali Bhindi is a dry sabji which is very popular in Rajasthan. 
            It is very simple to make and tastes good. It goes well with chapati and rice.
            I personally like it with rice and dal. It is prepared with lady’sfinger, besan and various spice powder. 
            Today we will learn how to make Besan wali bhindi or lady’sfinger with gram flour following this easy recipe with step wise pictures.`,
      'https://www.padhuskitchen.com/wp-content/uploads/2017/11/besanvalibhindi.jpg',
      [
        new Ingredient('Lady’s finger', 250),
        new Ingredient('Gram flour/besan/kadalaimavu', 0.25),
        new Ingredient('Coriander powder', 1.5),
        new Ingredient('Fennel powder', 0.75),
        new Ingredient('Turmeric powder', 0.5),
        new Ingredient('Salt needed', 1),
        new Ingredient('Amchur powder ', 0.75),
        new Ingredient('Oil ', 4),
      ]
    ),
    new Recipe(
      'Vazhaikkai Podi-Raw Banana Podi',
      `Vazhaikkai Podi-Raw Banana Podi is dry side dish prepared with raw banana and spices. 
            It is not very common, in fact many do not know about this dish at all. 
            I do make this when I have leftover raw bananas/raw plantain. 
            This is very tasty, when had with hot rice and ghee. Make any vegetable kootu to pair with it and your lunch is ready in a jiffy. 
            These dishes take mere minutes to prepare. Today we will learn how to make raw banana podi following this easy recipe.`,
      'https://www.padhuskitchen.com/wp-content/uploads/2018/11/vazhaikkaipodi.jpg',
      [
        new Ingredient('Raw Banana', 1),
        new Ingredient('Turmeric powder', 0.25),
        new Ingredient('Bengal gram dal', 1.5),
        new Ingredient('Fennel powder', 0.75),
        new Ingredient('Turmeric powder', 0.5),
        new Ingredient('Salt needed', 1),
        new Ingredient('Oil ', 4),
      ]
    ),
  ];
  constructor(private http: HttpClient) {}
  recipeChanged: Subject<Recipe> = new Subject();

  fetchRecipes() {}

  storeRecipes() {
    this.http
      .put(
        'https://my-recipe-app-59056-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        this.recipes
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeAtIndex(idx: number) {
    return this.recipes[idx];
  }

  addRecipe(recipe: Recipe): number {
    this.recipes.push(recipe);
    this.recipeChanged.next(recipe);
    return this.recipes.length - 1;
  }

  updateRecipeAtIndex(index: number, recipe: Recipe) {
    console.log(recipe);
    this.recipes[index] = recipe;
    this.recipeChanged.next(recipe);
  }

  deleteRecipeAtIndex(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(null);
  }
}
