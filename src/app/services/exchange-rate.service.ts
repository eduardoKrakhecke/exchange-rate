import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getCurrentExchangeRate(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=EUR&to_symbol=BRL`).pipe(
      map((response) => {
        return response
      })
    );
  }

  getDailyExchangeRate(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=EUR&to_symbol=BRL`).pipe(
      map((response) => {
        return response
      })
    );
  }
}
