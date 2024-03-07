import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { UnknownChocolate } from '../../objects/unknown-chocolate';
import { ChocolateWithStats } from '../../interfaces/chocolate-with-stats';

@Component({
  selector: 'app-chocolate',
  standalone: true,
  imports: [CurrencyPipe,],
  templateUrl: './chocolate.component.html',
  styleUrl: './chocolate.component.sass'
})
export class ChocolateComponent {
  @Input() chocolate: ChocolateWithStats = UnknownChocolate;

  openDetails: string[] = [];

  toggleDetails(id: string): void {
    if (this.openDetails.includes(id)) {
      this.openDetails = this.openDetails.filter((i) => i !== id);
      return;
    }
    this.openDetails.push(id);
  }

  log(item: any): void {
    console.log(item);
  }


}
