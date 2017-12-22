import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

    return this.httpClient.put('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json',
                               this.recipesService.getRecipes()
    // replace for interceptor
    //   , {
    //   params: new HttpParams().set('auth', token)
    // }
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json'
    // replace for interceptor
    //   , {
    //   params: new HttpParams().set('auth', token)
    // }
    )
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
