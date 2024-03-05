import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averagePrice',
  standalone: true
})
export class AveragePricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number {
    console.log(value);
    return 100;
  }

}
