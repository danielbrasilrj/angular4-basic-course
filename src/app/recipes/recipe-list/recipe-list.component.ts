import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://get.pxhere.com/photo/dish-meal-food-salad-green-red-produce-vegetable-plate-recipe-eat-lunch-cuisine-cheese-cook-nutrition-tomatoes-olives-frisch-kohlrabi-hunger-au-gratin-gratin-1323649.jpg'),
    new Recipe('Another Test Recipe', 'This is another simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hapalos_Artos_%28soft_bread%29%2C_a_traditional_Ancient_Roman_recipe_for_a_classic_fine_bread%2C_from_Athenaeus%27_Deipnosophistae_%2816336232886%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
