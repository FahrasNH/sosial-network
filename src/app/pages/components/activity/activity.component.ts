import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: any[] = [
    {
      name: 'Michael',
      activity: 'connected',
      title: 'How to become an expert',
      updated: '2 seconds ago'
    },
    {
      name: 'John Smith',
      activity: 'add a new video',
      title: 'Creative people mus follow',
      updated: '1 day ago'
    },
    {
      name: 'Batista',
      activity: 'shared a document',
      title: 'How to become an expert',
      updated: '1 hour ago'
    },
    {
      name: 'Rock Lee',
      activity: 'upload a new video',
      title: 'How to become an expert',
      updated: '19 seconds ago'
    },
    {
      name: 'Chelsea',
      activity: 'Like a video',
      title: 'Some marketing tricks',
      updated: '44 minutes ago'
    }
  ];

  ngOnInit(): void {}
}
