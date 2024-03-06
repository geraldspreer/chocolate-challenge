import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averagePrice',
  standalone: true
})
export class AveragePricePipe implements PipeTransform {

  transform(_: unknown, ...args: unknown[]): number {
    return 100;
  }

}
