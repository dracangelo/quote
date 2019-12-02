import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote("Sometimes all one needs is a hug", "drac", "All one needs is a hug to keep them going.",new Date(2019,12,11)),
    new Quote("All I want is out","maniac", "out is the only permanent solution to temporary problem",new Date(2019,11,11) )



  ];
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  3
  deleteQuote(isComplete, index){
    if(isComplete) {
       let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
    
    if (toDelete){
      this.quotes.splice(index,1)
    }
    }
  }
  addNewQuote(quotes){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    quotes.finalDate = new Date(quotes.finalDate)
    this.quotes.push(quotes)
  }
  
  coolQuote() {
    let upVoteArr: number[] = [];
    for (let i of this.quotes) {
      upVoteArr.push(i.upvote);
    }
    let maxVote = Math.max(...upVoteArr);
    let highestVotedQuote = this.quotes.find(quote => quote.upvote === maxVote);
    return highestVotedQuote;
  }
 
  upvote(index){
    this.quotes[index].upvote+=1;
  }

  downvote(index){
    this.quotes[index].downvote+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}