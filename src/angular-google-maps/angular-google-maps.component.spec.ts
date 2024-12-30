import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGoogleMapsComponent } from './angular-google-maps.component';

describe('AngularGoogleMapsComponent', () => {
  let component: AngularGoogleMapsComponent;
  let fixture: ComponentFixture<AngularGoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularGoogleMapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
