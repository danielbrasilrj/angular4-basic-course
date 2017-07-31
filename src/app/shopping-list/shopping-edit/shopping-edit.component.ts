import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {

  }

  onAddItem() {
    let name = this.nameInputRef.nativeElement.value;
    let amount = this.amountInputRef.nativeElement.value;
    let ingredient = new Ingredient(name, amount);

    this.itemAdded.emit(ingredient);
  }
}
