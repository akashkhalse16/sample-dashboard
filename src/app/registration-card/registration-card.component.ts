import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registration-card',
  templateUrl: './registration-card.component.html',
  styleUrls: ['./registration-card.component.scss']
})
export class RegistrationCardComponent {
  @Input() rdata: any;
}
