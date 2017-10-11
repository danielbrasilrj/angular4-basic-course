import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  // loading lazily the recipe and shopping-list modules
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }
];

@NgModule({
  imports: [
    // The preloading configuration will load all the lazy loading modules after
    // the user access the main page. This configurations continue loading in a
    // different javascript file (in the browser's client) and when the lazy
    // load modules to be access (with de URL), the lazy load module has been loaded,
    // avoiding the user to wait a download to chuck.js
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
