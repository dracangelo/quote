import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quot-detail',
  templateUrl: './quot-detail.component.html',
  styleUrls: ['./quot-detail.component.css']
})
export class QuotDetailComponent implements OnInit {
  @Input() quote

  constructor() { }

  ngOnInit() {
  }

}
