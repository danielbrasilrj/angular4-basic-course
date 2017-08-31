import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesService: RecipesService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-3e51b.firebaseio.com/recipes.json', this.recipesService.getRecipes());
  }
}