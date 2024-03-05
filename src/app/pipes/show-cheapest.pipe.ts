import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showCheapest',
  standalone: true
})
export class ShowCheapestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('value', value);
    return null;
  }

}
