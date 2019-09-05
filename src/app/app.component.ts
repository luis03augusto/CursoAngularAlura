import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url:
      'https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/144922528/images/1412967253.jpeg',
      desciption: 'Leão'
    },
    {
      url:
      'https://statig0.akamaized.net/bancodeimagens/dg/qi/e6/dgqie66ooeyri4whdebd9oqh9.jpg',
      desciption: 'Leoa'
    },
    {
      url:
      'https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/144922528/images/1412967253.jpeg',
      desciption: 'Leão'
    }
  ];
  }
