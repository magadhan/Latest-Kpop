import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpopVideo } from '../kpop-video';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kpop-video',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="kpopVideo.photo" alt="Exterior photo of {{kpopVideo.name}}">
      <h2 class="listing-heading">{{ kpopVideo.name }}</h2>
      <p class="listing-album">{{ kpopVideo.album }}, {{ kpopVideo.group }}</p>
      <a [routerLink]="['/details', kpopVideo.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./kpop-video.component.css']
})
export class KpopVideoComponent {
  @Input() kpopVideo!:KpopVideo;
}

