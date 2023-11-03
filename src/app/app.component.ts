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
  title = 'exchange-rate';
  code = ''

  constructor(private exchangeRateService: ExchangeRateService) {
  }

  ngOnInit(): void {
    //this.getCurrencyRate()
    //this.getDailyRate()
  }

  getCurrencyRate(): void {
    this.exchangeRateService.getCurrentExchangeRate('USD').subscribe(
      (response: CurrencyRate) => {
        console.log("curency rate" ,response)
      },
      (e: any) => {
        console.error(e);
      }
    )
  }

  getDailyRate(): void {
    this.exchangeRateService.getDailyExchangeRate('USD').subscribe(
      (response: DailyRate) => {
        console.log("daily rate" ,response)
      },
      (e: any) => {
        console.error(e);
      }
    )
  }

  handleClick(): void {
    console.log('Botão azul clicado!');
  }
}
