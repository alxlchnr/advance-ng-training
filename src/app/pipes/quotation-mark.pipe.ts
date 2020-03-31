import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationMark'
})
export class QuotationMarkPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value){
      return value.replace(/&quot;/g,'"')
    }
    return null;
  }

}
