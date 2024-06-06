import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'color'
})
export class ColorPipe implements PipeTransform{

  transform(value: number):string|undefined {

    if (value === 0 ) return 'Red';
    if (value=== 1 ) return 'Black';
    if (value=== 2 ) return 'Blue';
     return 'Green';

}
}
