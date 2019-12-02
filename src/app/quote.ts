export class Quote {
  showDetails:boolean;
  upvote: number;
  downvote:number;
  

  constructor(
    public quote:string,
    public author:string,
    public details:string,
    public finalDate:Date,
  ){
    this.showDetails=false;
    this.upvote = 0;
    this.downvote = 0;
  }
}
