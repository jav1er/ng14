import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first',
})
export class FirstPipe implements PipeTransform {
  transform(
    text: string,
    serch: string,
    ...x: [string?, string?, number?]
  ): boolean {
    console.log('dentro del pipe');

    console.log(serch);
    console.log('texto a buscar ');

    console.log(text);

    let regex = new RegExp(`${serch}`, 'i');
    return regex.test(text);
  }
}
