import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Welcome to Inspirational Quotes';
  quotes: Quote[] = [
    new Quote(1, 'Hannah', 'Be yourself; everyone else is already taken.', 'Oscar Wilde', new Date(2021,8,20), 0, 0),
    new Quote(2, 'Waruguru', 'You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.', 'William W. Purkey', new Date(2021,8,20), 0, 0),
    new Quote(3, 'Gathu', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date(2021,8,20), 0, 0),
    new Quote(4, 'Kieya', 'The most wasted of all days is one without laughter.', 'Nicolas Chamfort', new Date(2021,8,20), 0, 0),
    new Quote(5, 'Peace', 'I like the night. Without the dark, we\'d never see the stars.', 'Stephenie Meyer, Twilight', new Date(2021,8,20), 0, 0),
    new Quote(6, 'Wanyenze', 'And now these three remain: faith, hope and love. But the greatest of these is love.', 'The Holy Bible', new Date(2021,8,20), 0, 0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
