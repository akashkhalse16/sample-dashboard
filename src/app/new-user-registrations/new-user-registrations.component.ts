import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-user-registrations',
  templateUrl: './new-user-registrations.component.html',
  styleUrls: ['./new-user-registrations.component.scss']
})
export class NewUserRegistrationsComponent {

  @Input() newUserRegistrationData: any;
}
