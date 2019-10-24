// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'sortPipe'
// })
// export class SortPipePipe implements PipeTransform {

//   transform(value: any, ...args: any[]): any {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortPipePipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (!column || column === '') { return _.sortBy(value); } // sort 1d array
    if (value.length <= 1) { return value; } // array with only one item
    return _.orderBy(value, [column], [order]);
  }
}