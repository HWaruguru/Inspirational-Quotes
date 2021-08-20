import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Welcome to Inspirational Quotes';
  quotes: Quotes [] = [
    new Quotes(1, 'Hannah', 'Insipirational','Be yourself; everyone else is already taken.', '― Oscar Wilde', new Date(2020,8,20), 0, 0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
