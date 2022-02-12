import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayErrorComponent } from './components/display-error/display-error.component';
import { NoRecipesComponent } from './components/recipes/no-recipes/no-recipes.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: NoRecipesComponent },
      {
        path: 'not-found',
        component: DisplayErrorComponent,
        data: { message: 'Invalid Recipe! please select from the list' },
      },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: 'recipes' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
