import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shoe } from 'src/shared/clothing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() items;
  @Output() setNew = new EventEmitter();

 selectedValue = 'Select a Category';

  onOptionsSelected() {
    this.setNew.emit(this.selectedValue);
  }

}
