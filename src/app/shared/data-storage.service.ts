import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesService: RecipesService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json', this.recipesService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json')
      // transforming the data to prevent error with ingredients = undefined
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
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
