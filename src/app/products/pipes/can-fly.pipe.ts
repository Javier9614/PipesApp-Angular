import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'canFly'
})
export class CanFlyCasePipe implements PipeTransform{

  transform(value: boolean):string {

    return ( value ) ?  'Vuela' : 'No Vuela';
}
}
