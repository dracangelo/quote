import { Directive } from '@angular/core';

@Directive({
  selector: '[appCoolQuote]'
})
export class CoolQuoteDirective {
  elem: any;

  constructor() {
    this.elem.nativeElement.style.backgroundColor = "red";
   }

}
