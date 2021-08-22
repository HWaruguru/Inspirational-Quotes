
import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote!: Quote;

    // updateQuoteWithHighestVotes() {
    //     const quoteVotes = this.quotes.map((quote) => quote.upvotes)
    //     const idx = quoteVotes.indexOf(Math.max(...quoteVotes))
    //     this.quotes = this.quotes.map((quote) => { return { ...quote, popular: false } })
    //     this.quotes[idx].popular = true
    // }

    // upvote(idx: number) {
    //     this.quotes[idx].upvotes += 1
    //     this.updateQuoteWithHighestVotes()
    // }

    // downvote(idx: number) {
    //     this.quotes[idx].downvotes += 1
    // }

  constructor() { }

  ngOnInit(): void {
  }

}
