import { Component } from '@angular/core';
import { ExchangeRateService } from "@app/services/exchange-rate.service";
import { CurrencyRate } from "@app/models/currency-rate";
import { DailyRate } from "@app/models/daily-rate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  code: string = ''
  dailyRate: DailyRate
  currencyRate: CurrencyRate
  showComponents: boolean = false

  constructor(private exchangeRateService: ExchangeRateService) {
  }

  getCurrencyRate(code: string): void {
    this.exchangeRateService.getCurrentExchangeRate(code).subscribe(
      (response: CurrencyRate) => {
        this.currencyRate = response
        this.showComponents = true//response.success
        console.log("curency rate" ,response)
      },
      (e: any) => {
        console.error(e);
      }
    )
  }

  getDailyRate(code: string): void {
    this.exchangeRateService.getDailyExchangeRate(code).subscribe(
      (response: DailyRate) => {
        if(response.success) {
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
          this.dailyRate.data = response.data.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate > thirtyDaysAgo;
          })
        }
        console.log("daily rate" ,this.dailyRate)
      },
      (e: any) => {
        console.error(e);
      }
    )
  }

  handleClickCurrencyRate(): void {
    this.getCurrencyRate(this.code)
  }

  handleClickDailyRate(): void {
    this.getDailyRate(this.code)
  }
}
