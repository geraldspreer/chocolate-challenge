import { Component, Input } from '@angular/core';
import { Chocolate } from '../../interfaces/chocolate';
import { ShowCheapestPipe } from '../../pipes/show-cheapest.pipe';
import { CurrencyPipe } from '@angular/common';
import { AveragePricePipe } from '../../pipes/average-price.pipe';

// TODO: Move to other file
export const UnknownChocolate: Chocolate = {
  id: '',
  name: 'Unbekanntes Produkt',
  brand: 'Nicht bekannt',
  currency: '€',
  prices: [],
  nutrition: {
    fat: {
      total: 0,
      saturated: 0
    },
    carbohydrates: {
      total: 0,
      sugar: 0
    },
    protein: 0,
    salt: 0
  }
};

@Component({
  selector: 'app-chocolate',
  standalone: true,
  imports: [ShowCheapestPipe, CurrencyPipe, AveragePricePipe],
  templateUrl: './chocolate.component.html',
  styleUrl: './chocolate.component.sass'
})
export class ChocolateComponent {
  @Input() chocolate: Chocolate = UnknownChocolate;

  openDetails: string[] = [];

  toggleDetails(id: string): void {
    if (this.openDetails.includes(id)) {
      this.openDetails = this.openDetails.filter((i) => i !== id);
      return;
    }
    this.openDetails.push(id);
  }
}
