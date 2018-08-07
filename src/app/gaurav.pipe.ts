import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gaurav'
})
export class GauravPipe implements PipeTransform {

  transform(value: any) {
    if(value.length>3){
      return value.substr(0,4);
    }
    else{
      return value;
    }
  }

}
