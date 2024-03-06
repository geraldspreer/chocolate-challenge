import { Pipe, PipeTransform } from '@angular/core';
import { Price } from '../interfaces/price';

@Pipe({
  name: 'cheapestPrice',
  standalone: true
})
export class CheapestPricePipe implements PipeTransform {

  transform(prices: Price[]): Price {
    const result = prices[0];
    // Sort by price
    const x = prices.sort((a, b) => b.amount - a.amount);
    x.forEach((_) => {
    });
    return result;
  }
}
