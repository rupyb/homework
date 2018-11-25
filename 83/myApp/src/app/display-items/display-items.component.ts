import { Component, Input } from '@angular/core';
import { getLocaleCurrencyName } from '@angular/common';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent {
  @Input() itemToDisplay: any;
  constructor() {

    this.getArray();
  }

  doStuff() {
    console.log('im great');
  }

  getArray() {
    console.log('hello world');

    for (const key in this.itemToDisplay) {
      console.log(key);
      }
    }
  }
