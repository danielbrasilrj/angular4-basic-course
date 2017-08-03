import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Beans Soup',
      'A swift soup',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg',
      [
        new Ingredient('Beans', 1), new Ingredient('Carriot', 2), new Ingredient('Meat', 3)
      ]),
    new Recipe('Chicken Soup',
      'A spicy soup',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Chicken', 1), new Ingredient('Spice', 3)
      ])
  ];

  getRecipes() {
    // return a copy of the array (good practice)
    return this.recipes.slice();
  }
}
