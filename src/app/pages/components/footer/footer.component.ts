import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  arrMenu: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.arrMenu = [
      {
        title: 'About',
        url: '/'
      },
      {
        title: 'For Business',
        url: '/'
      },
      {
        title: 'Suggestions',
        url: '/'
      },
      {
        title: 'Help & FAQs',
        url: '/'
      },
      {
        title: 'Contacts',
        utl: '/'
      },
      {
        title: 'Pricing',
        url: '/'
      }
    ];
  }
}
