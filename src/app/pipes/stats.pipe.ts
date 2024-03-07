import { Pipe, PipeTransform } from '@angular/core';
import { Chocolate } from '../interfaces/chocolate';
import { ChocolateWithStats } from '../interfaces/chocolate-with-stats';
import { Price } from '../interfaces/price';

@Pipe({
  name: 'includeStats',
  standalone: true
})
export class StatsPipe implements PipeTransform {

  public transform(values: Chocolate[]): ChocolateWithStats[] {
    return values.map((chocolate) => {
      const withStats = {
        ...chocolate,
        averagePrice: this.findAveragePrice(chocolate.prices),
        prices: chocolate.prices.map((price) => ({
          ...price,
          isCheapest: this.isCheapest(price, chocolate.prices),
          priceFor100g: this.for100g(price)
        }))
      };

      return withStats;
    }
    );
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
    return Math.min(...prices.map((price) => this.for100g(price)));
  }

  private for100g({ amount, unit, price }: Price): number {
    if (unit === 'kg') { amount = amount * 1000; }

    const divisor = amount / 100;
    const priceFor100g = price / divisor;

    return parseFloat(priceFor100g.toFixed(2));

  }
}
