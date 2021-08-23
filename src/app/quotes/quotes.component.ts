import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Welcome to Inspirational Quotes';
  quotes: Quote[] = [
    new Quote(1, 'Hannah', 'Be yourself; everyone else is already taken.', 'Oscar Wilde', new Date(2021, 7, 20), 0, 0),
    new Quote(2, 'Waruguru', 'You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.', 'William W. Purkey', new Date(2021, 7, 20), 0, 0),
    new Quote(3, 'Gathu', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date(2021, 7, 20), 0, 0),
    new Quote(4, 'Kieya', 'The most wasted of all days is one without laughter.', 'Nicolas Chamfort', new Date(2021, 7, 20), 0, 0),
    new Quote(5, 'Peace', 'I like the night. Without the dark, we\'d never see the stars.', 'Stephenie Meyer, Twilight', new Date(2021, 7, 20), 0, 0),
    new Quote(6, 'Wanyenze', 'And now these three remain: faith, hope and love. But the greatest of these is love.', 'The Holy Bible', new Date(2021, 7, 20), 0, 0),
  ];

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  updateQuoteWithHighestVotes() {
    const quoteVotes = this.quotes.map((quote) => quote.upvotes)
    const idx = quoteVotes.indexOf(Math.max(...quoteVotes))
    this.quotes = this.quotes.map((quote) => { return { ...quote, popular: false } })
    this.quotes[idx].popular = true
  }

  deleteQuote(index: number){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete){
      this.quotes.splice(index,1);
    }
}

  constructor() { }

  ngOnInit() {

  }
}
