import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipesService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json?auth=' + token, this.recipesService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json?auth=' + token)
      // transforming the data to prevent error with ingredients = undefined
      .map(
        // the default is to get access to the body
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipesService.setRecipes(recipes);
      }
    );
  }
}
