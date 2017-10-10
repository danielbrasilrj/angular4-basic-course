import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  // you don't need to import modules to export them
  exports: [
    CommonModule,
    DropdownDirective
  ]
  //to avoid create child injector: NEVER PROVIDE SERVICES IN SHARED MODULES!
  //                       (ESPECIALLY NOT IF YOU PLAN TO USE THEM IN LAZY LOADED MODULES!)
})
export class SharedModule {

}
