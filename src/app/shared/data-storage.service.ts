import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesService: RecipesService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json', this.recipesService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json').subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipesService.setRecipes(recipes);
      }
    );
  }
}
