import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1,
               'Beans Soup',
               'A swift soup',
               'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg',
               [
                 new Ingredient('Beans', 1), new Ingredient('Carriot', 2), new Ingredient('Meat', 3)
               ]),
    new Recipe(2,
               'Chicken Soup',
               'A spicy soup',
               'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
               [
                 new Ingredient('Chicken', 1), new Ingredient('Spice', 3)
               ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // return a copy of the array (good practice)
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id == id);
  }
}
