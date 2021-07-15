import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  arrMenu: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.arrMenu = [
      'Videos',
      'People',
      'Documents',
      'Events',
      'Communities',
      'Favourites',
      'Channel'
    ];
  }
}
