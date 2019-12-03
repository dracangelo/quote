import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";
// import { EventEmitter } from 'events';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  newQuote = new Quote("", "", "", new Date(), "");

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote)
  }

  constructor() {}

  ngOnInit() {}
}
