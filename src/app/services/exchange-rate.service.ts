import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { api_key } from "@app/constants/api-key";
import { CurrencyRate } from "@app/models/currency-rate";
import {DailyRate} from "@app/models/daily-rate";


@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getCurrentExchangeRate(fromSymbol: string): Observable<CurrencyRate> {
    return this.http.get<CurrencyRate>(`${this.BASE_URL}/currentExchangeRate?apiKey=${api_key}&from_symbol=${fromSymbol}&to_symbol=BRL`).pipe(
      map((response) => {
        return response
      })
    );
  }

  getDailyExchangeRate(fromSymbol: string): Observable<DailyRate> {
    return this.http.get<DailyRate>(`${this.BASE_URL}/dailyExchangeRate?apiKey=${api_key}&from_symbol=${fromSymbol}&to_symbol=BRL`).pipe(
      map((response) => {
        return response
      })
    );
  }
}
