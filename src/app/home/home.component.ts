import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpopVideoComponent } from '../kpop-video/kpop-video.component';
import { KpopVideo } from '../kpop-video';
import { KpopService } from '../kpop-service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <header class="navbar">
      <form>
        <input type="text" placeholder="Filter by Group">
        <button class="primary" type="button">Search</button>
      </form>
    </header>
    <section class="results">
      <app-kpop-video></app-kpop-video>
       <app-kpop-video *ngFor="let KpopVideo of KpopVideoList" [kpopVideo] = "KpopVideo"></app-kpop-video>
    </section>
  `,
  imports: [CommonModule, KpopVideoComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  KpopVideoList: KpopVideo[] = [];
  kpopService: KpopService =  inject(KpopService);

  constructor() {
    this.KpopVideoList = this.kpopService.getAllKpopVideo();
  }
}
