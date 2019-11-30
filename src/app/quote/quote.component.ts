import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[] = [
    new Quote(1,"Sometimes a hug is worth more than a thousand words"),
    new Quote(2, "I am the streets, you better look both ways before you cross me."),
  ];

  constructor() { }

  ngOnInit() {
  }

}
