import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Task[], args: string): any {
    return value.filter(item => item.Title.startsWith(args));;
  }

}
