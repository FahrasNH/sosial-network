import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelComponent implements OnInit {
  channels: any[] = [
    {
      title: 'Google'
    },
    {
      title: 'Dribbble'
    },
    {
      title: 'Microsoft'
    },
    {
      title: 'Yahoo'
    },
    {
      title: 'iMedia'
    },
    {
      title: 'Khan Studio'
    },
    {
      title: 'Netflix'
    },
    {
      title: 'Mola TV'
    },
    {
      title: 'CNN'
    },
    {
      title: 'Sky News'
    }
  ];

  ngOnInit(): void {}
}
