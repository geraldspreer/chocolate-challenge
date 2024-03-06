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
        }))
      };

      return withStats;
    }
    );
  }

  private isCheapest(price: Price, otherPrices: Price[]): boolean {
      otherPrices = otherPrices.map(price => {
      return { ...price, price: this.convertToGram(price) };
    });
    const sortedPrices = otherPrices.sort((a, b) => a.price - b.price);
    console.log(sortedPrices);
    if (sortedPrices[0].link === price.link) {
      return true;
    }
    return false;
  }

  private findAveragePrice(prices: Price[]): number {
    return Math.min(...prices.map((price) => this.convertToGram(price)));
  }

  private convertToGram(price: Price): number {
    let divider = (price.unit === 'kg') ? 1000 : 100;

    return price.price / (price.amount / divider);
  }
}
