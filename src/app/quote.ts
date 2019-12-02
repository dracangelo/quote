export class Quote {
  upvote: number;
  downvote:number;
  showDetails:boolean;

  constructor(
    public quote:string,
    public author:string,
    public  description:string,
    public completeDate:Date
  ){
    this.showDetails=false;
    this.upvote=0;
    this.downvote=0;
  }
}
