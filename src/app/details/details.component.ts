import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KpopService } from '../kpop-service';
import { KpopVideo } from '../kpop-video';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      // <img class="listing-photo" [src]="kpopVideo?.photo" alt="Picture of {{kpopVideo?.name}}.">
      // <section class="listing-description">
      //   <h2 class="listing-heading">{{kpopVideo?.name}}</h2>
      //   <p class="listing-location">{{kpopVideo?.album}}, {{kpopVideo?.artists}}</p>
      // </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  kpopService = inject(KpopService);
  kpopVideo: KpopVideo | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });
  constructor() {
    const kpopVideoId = parseInt(this.route.snapshot.params['id'],10);
    this.kpopVideo = this.kpopService.getKpopVideoById(kpopVideoId);
  }
  // submitApplication(){
  //   this.kpopService.submitApplication(
  //     this.applyForm.value.firstName?? '',
  //     this.applyForm.value.lastName?? '',
  //     this.applyForm.value.email?? '',
  //     this.applyForm.value.phone??'' [Validators.required, Validators.pattern(/^\+?{10,12}$/)]
  //   );
  // }
}

