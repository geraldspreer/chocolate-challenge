import { Component, Input } from '@angular/core';
import { Chocolate } from '../../interfaces/chocolate';
import { CurrencyPipe } from '@angular/common';
import { AveragePricePipe } from '../../pipes/average-price.pipe';
import { CheapestPricePipe } from '../../pipes/cheapest-price.pipe';
import { UnknownChocolate } from '../../objects/unknown-chocolate';

@Component({
  selector: 'app-chocolate',
  standalone: true,
  imports: [CheapestPricePipe, CurrencyPipe, AveragePricePipe],
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
