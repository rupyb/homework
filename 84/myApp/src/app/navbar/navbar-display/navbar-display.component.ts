import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-display',
  templateUrl: './navbar-display.component.html',
  styleUrls: ['./navbar-display.component.css']
})
export class NavbarDisplayComponent implements OnInit {
@Input() weatherData;
  constructor() { }

  ngOnInit() {
  }

}
