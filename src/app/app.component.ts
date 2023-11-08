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
        this.showComponents = response.success
        if(response.success) {
          this.currencyRate = response
        } else {
          alert('Problema ao buscar os dados')
        }

        console.log("curency rate" ,this.currencyRate)
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
          this.dailyRate = response
          this.filterDaysAgo(response)
          this.calculateCloseDiff()
        } else {
          alert('Problema ao buscar os dados dos últimos 30 dias')
        }
        console.log("daily rate" ,this.dailyRate)
      },
      (e: any) => {
        console.error(e);
      }
    )
  }

  calculateCloseDiff(): void {
    this.dailyRate.data = this.dailyRate.data.map((currentData, index, array) => {
      if (index > 0) {
        const previousClose = array[index - 1].close;
        const currentClose = currentData.close;
        const difference = (currentClose - previousClose) / previousClose;
        currentData.closeDiffPercentage = difference * 100;
      }
      return currentData;
    });
  }

  filterDaysAgo(response: DailyRate): void {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    this.dailyRate.data = response.data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate > thirtyDaysAgo;
    })
  }

  handleClickCurrencyRate(): void {
    this.getCurrencyRate(this.code)
  }

  handleClickDailyRate(): void {
    this.getDailyRate(this.code)
  }
}
