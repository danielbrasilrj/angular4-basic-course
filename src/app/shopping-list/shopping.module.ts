import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule {

}
