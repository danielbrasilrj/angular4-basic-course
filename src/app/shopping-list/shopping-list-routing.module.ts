import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    // must use forChild for every RoutingModule besides a module whitch have RouterModule.forRoot(appRoutes)
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
