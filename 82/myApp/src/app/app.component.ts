import { Component } from '@angular/core';
import { Person, Address } from './shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Great FirstAngularApp';

  trumpAddress: Address = {
    number: 123,
    street: 'main',
    city: 'New York',
    state: 'New York',
    zip: '11230'
  };

  thePerson: Person = {
    firstName: 'Donald',
    lastName: 'Trump',
    address: this.trumpAddress
  };

  idiot = 'berkowitz';
}
