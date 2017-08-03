import {Recipe} from './recipe.model';

export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg'),
    new Recipe('Another Test Recipe', 'This is another simply a test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  getRecipes() {
    // return a copy of the array (good practice)
    return this.recipes.slice();
  }
}