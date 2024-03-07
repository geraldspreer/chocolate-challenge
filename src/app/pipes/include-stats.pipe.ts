import { Pipe, PipeTransform } from '@angular/core';
import { Chocolate } from '../interfaces/chocolate';
import { ChocolateWithStats } from '../interfaces/chocolate-with-stats';
import { Price } from '../interfaces/price';

@Pipe({
  name: 'includeStats',
  standalone: true
})
export class IncludeStatsPipe implements PipeTransform {

  public transform(values: Chocolate[]): ChocolateWithStats[] {
    return values.map((chocolate) => {
      return {
        ...chocolate,
        averagePrice: this.findAveragePrice(chocolate.prices),
        prices: chocolate.prices.map((price) => ({
          ...price,
          isCheapest: this.isCheapest(price, chocolate.prices),
          priceFor100g: this.for100g(price)
        }))
      };
    });
  }

  private isCheapest(price: Price, otherPrices: Price[]): boolean {
    otherPrices = otherPrices.map(price => {
      return { ...price, price: this.for100g(price) };
    });
    const sortedPrices = otherPrices.sort((a, b) => a.price - b.price);
    if (sortedPrices[0].link === price.link) {
      return true;
    }
    return false;
  }

  private findAveragePrice(prices: Price[]): number {
    const average = prices
      .map((price) => this.for100g(price))
      .reduce((a, b) => a + b, 0) / prices.length;

    return this.withTwoFractionDigits(average);
  }

  private for100g({ amount, unit, price }: Price): number {
    if (unit === 'kg') { amount *= 1000; }

    return this.withTwoFractionDigits(price / (amount / 100));
  }

  private withTwoFractionDigits(value: number): number {
    return parseFloat(value.toFixed(2));
  }
}
