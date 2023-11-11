import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private _http: HttpClient) { }

  getDashboardData(): Observable<any> {
    return this._http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
