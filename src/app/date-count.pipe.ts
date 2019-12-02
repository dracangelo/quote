import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

 
  transform(value:any): number {
    let today:Date = new Date ();
    let zeroDay:any =new Date(today.getFullYear(), today.getMonth()+1,today.getDay())
    let dateDifference = Math.abs(zeroDay-value)
    const daySeconds= 86400;
    let dateSeconds = dateDifference*0.001;
    var todayCount = dateSeconds/daySeconds;

    if (todayCount <=0){
      return 0;
    }else{
      return todayCount;
    }
  }
}
