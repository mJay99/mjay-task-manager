import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByAll'
})
export class SearchByAllPipe implements PipeTransform {

  transform(items: any, filter: any): any {
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
    }
  }

}
