import { Component } from '@angular/core';
import { ExchangeRateService } from "@app/services/exchange-rate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exchange-rate';

  constructor(private exchangeRateService: ExchangeRateService) {
  }

  ngOnInit(): void {
    this.getCurrencyRate()
    this.getDailyRate()
  }

  getCurrencyRate() {
    this.exchangeRateService.getCurrentExchangeRate().subscribe(
      (response) => {
        console.log("curency rate" ,response)
      },
      (e: any) => {
        console.error(e);
      }
    )
  }

  getDailyRate() {
    this.exchangeRateService.getDailyExchangeRate().subscribe(
      (response) => {
        console.log("daily rate" ,response)
      },
      (e: any) => {
        console.error(e);
      }
    )
  }
}
