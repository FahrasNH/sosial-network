import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  arrMenu: any[] = [
    {
      title: 'Videos',
      url: '/'
    },
    {
      title: 'People',
      url: '/'
    },
    {
      title: 'Documents',
      url: '/'
    },
    {
      title: 'Events',
      url: '/'
    },
    {
      title: 'Communities',
      utl: '/'
    },
    {
      title: 'Favourites',
      url: '/'
    },
    {
      title: 'Channel',
      url: '/'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
