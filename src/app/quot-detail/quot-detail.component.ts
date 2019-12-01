import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quot-detail',
  templateUrl: './quot-detail.component.html',
  styleUrls: ['./quot-detail.component.css']
})
export class QuotDetailComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter <boolean>();
  quoteDelete(complete:boolean){

    this.isComplete.emit(complete);
  }
  upvote(){
    this.quote.upvote += 1;
  }
  downvote(){
    this.quote.downvote +=1;
  }

  constructor() { }

  ngOnInit() {
  }

}
