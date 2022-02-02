import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayBreaker'
})
export class ArrayBreakerPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(", ");
  }

}
