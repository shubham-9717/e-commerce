import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, price) {
    if(value.length == 0 || price == ''){
      return value;
    }
    let arr = [];
    for(let i=0; i<value.length;i++){
      if(value[i].qty == price){
        arr.push(value[i]);
      }
    }
    return arr;
  }

}
