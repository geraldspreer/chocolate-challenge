import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showCheapest',
  standalone: true
})
export class ShowCheapestPipe implements PipeTransform {

  // TODO: Fix type
  transform(value: any, ...args: unknown[]): unknown {
    return value[0];
  }

}
