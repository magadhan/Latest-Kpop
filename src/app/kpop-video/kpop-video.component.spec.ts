import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpopVideoComponent } from './kpop-video.component';

describe('KpopVideoComponent', () => {
  let component: KpopVideoComponent;
  let fixture: ComponentFixture<KpopVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KpopVideoComponent]
    });
    fixture = TestBed.createComponent(KpopVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
