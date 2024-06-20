import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText?: any): any {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();
    return value.filter(function(value:any)  {
      return JSON.stringify(value).toLocaleLowerCase().includes(searchText);
  })

}
}
