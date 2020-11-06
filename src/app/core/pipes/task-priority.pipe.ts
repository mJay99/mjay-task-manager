import { Pipe, PipeTransform } from '@angular/core';
// import * as _ from 'underscore';

@Pipe({
  name: 'taskPriority'
})
export class PiorityPipe implements PipeTransform {
  transform(value: any, key?: string): any {
    if (value) {
      if (value == 1) {
        return "Normal"
      } else if(value == 2){
        return "Medium" 
      }
      else return "High"
    } else {
      return "N/A"
    }
  }

}
