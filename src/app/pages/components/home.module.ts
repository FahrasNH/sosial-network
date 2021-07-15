import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ActivityComponent } from './activity/activity.component';
import { ChannelComponent } from './channels/channels.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    ActivityComponent,
    ChannelComponent
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    ActivityComponent,
    ChannelComponent
  ]
})
export class HomeModule {}
