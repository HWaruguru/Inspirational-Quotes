
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() upvoteQuote = new EventEmitter<Quote>();

  upVoteQuote() {
    this.upvoteQuote.emit();

  }

  upvote() {
    this.quote.upvotes += 1
    this.upVoteQuote()
  }

  downvote() {
    this.quote.downvotes += 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
