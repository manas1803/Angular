import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredStatus:string,propName:string): any 
  {
    if(value.length==0){
      return value;
    }
    const resultArray = [];
    for(let item of value){
      if(item[propName]===filteredStatus){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
