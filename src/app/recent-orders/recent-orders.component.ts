import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  @Input() recentOrdersData: any;

}
