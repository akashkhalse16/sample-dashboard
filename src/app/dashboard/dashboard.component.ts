import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardDataService } from '../dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  dashboardData: any = {};

  constructor(private _http: HttpClient, private _dataService: DashboardDataService) { }

  ngOnInit() {
    this.getDatashboardData();
  }

  getDatashboardData() {
    this._dataService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        console.log(this.dashboardData);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
