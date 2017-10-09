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
})
export class SharedModule {

}
