import { Component, Input } from '@angular/core';
import { Address } from '../shared/person';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  @Input()
  trumpAddress: Address;
}
