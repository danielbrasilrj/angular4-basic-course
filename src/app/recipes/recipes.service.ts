import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipesService {

  private incrementId: number = 0;
  recipesChanged = new Subject<Recipe[]>();
  recipeChanged = new Subject<boolean>();

  private recipes: Recipe[] = [
    new Recipe(++this.incrementId,
               'Beans Soup',
               'A swift soup',
               'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg',
               [
                 new Ingredient('Beans', 1), new Ingredient('Carriot', 2), new Ingredient('Meat', 3)
               ]),
    new Recipe(++this.incrementId,
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

  getRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id == id);
  }

  addRecipe(recipe: Recipe) {
    recipe.id = ++this.incrementId;
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(recipeUpdated: Recipe) {
    const recipe = this.getRecipe(recipeUpdated.id);
    const index = this.recipes.indexOf(recipe);
    this.recipes[index] = recipeUpdated;
    this.recipesChanged.next(this.getRecipes());
  }

  removeRecipe(recipe: Recipe) {
    const index = this.recipes.indexOf(recipe);
    if (index > -1) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.getRecipes());
    }
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  removeIngredientToRecipe(idRecipe: number, indexofIngredient: number) {
    let recipe = this.getRecipe(idRecipe);
    if (indexofIngredient > -1) {
      recipe.ingredients.splice(indexofIngredient, 1);
      this.recipeChanged.next(true);
    }
  }
}
