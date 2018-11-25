import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Shoe } from 'src/shared/clothing';
import { Mp3 } from 'src/shared/electronics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() setNew;

  selectedItem = null;
  title = 'myApp';
  shoeArray: Shoe[] = [
    {
      id: 1,
      image: '',
      name: 'black shoes',
      price: 7.99,
      color: 'black',
      size: '9ee',
      type: 'footwear',
      category: 'clothing'
    },
    {
      id: 2,
      image: '',
      name: 'sandal',
      price: 47.99,
      color: 'tan',
      size: '5.5',
      type: 'footwear',
      category: 'clothing'
    }
  ];
  mp3Array: Mp3[] = [
    {
      name: 'sony-mp3',
      image: '',
      price: 85.00,
      voltage: '30vv',
      screen: true,
      touchscreen: false,
      category: 'electronic'
    },
    {
      name: 'panosonic-mp3',
      image: '',
      price: 85.00,
      voltage: '304vv',
      screen: true,
      touchscreen: false,
      category: 'electronic'
    }
  ];
  items = [
    {
      name: 'clothing',
      shoeArray: this.shoeArray
    },
    {
      name: 'electronics',
      mp3Array: this.mp3Array
    }
  ];

  setChosenNavItem(item) {
    this.selectedItem = item;
    console.log('noooooooooooooooo');

    // console.log('hello', this.selectedItem);
    // tslint:disable-next-line:forin
    for (const key in this.selectedItem) {
      // console.log('key', key);
      // console.log('item', this.selectedItem[key]);
      // console.log('stuff', this.selectedItem);
      if (key !== 'name') {
       // console.log(this.selectedItem.key);
        this.selectedItem = this.selectedItem[key];
        console.log(this.selectedItem);
      }
      }
  }
}
