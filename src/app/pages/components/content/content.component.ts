import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contents: any[] = [];

  ngOnInit(): void {
    this.contents = [
      {
        name: 'Videos',
        title: 'Upload Your Own Videos'
      },
      {
        name: 'Peoples',
        title: 'Show Your Work'
      },
      {
        name: 'Documents',
        title: 'Share Your Documents'
      }
    ];
  }
}
