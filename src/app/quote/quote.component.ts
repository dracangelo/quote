import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote( "Sometimes all one needs is a hug", "drac", "All one needs is a hug to keep them going.",new Date(2019,11,11)),
    new Quote("All I want is out","maniac", "out is the only permanent solution to temporary problem",new Date(2019,11,11) )



  ];
  toggleDetails(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }
  3
  deleteQuote(isDelete, index){
    if(isDelete) {
let toDelete=confirm(`Are you sure you want to delete ${this.quote[index].quote}?`)
    
    if (toDelete){
      this.quote.splice(index,1)
    }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.addedBy =quote.added;
    quote.finalDate = new Date(quote.finalDate)
    this.quote.push(quote)
  }
  
  coolQuote() {
    let upVoteArr: number[] = [];
    for (let i of this.quote) {
      upVoteArr.push(i.upvote);
    }
    let maxVote = Math.max(...upVoteArr);
    let highestVotedQuote = this.quote.find(quote => quote.upvote === maxVote);
    return highestVotedQuote;
  }
 
  constructor() { }

  ngOnInit() {
  }

}