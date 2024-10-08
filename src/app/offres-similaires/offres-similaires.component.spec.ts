import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresSimilairesComponent } from './offres-similaires.component';

describe('OffresSimilairesComponent', () => {
  let component: OffresSimilairesComponent;
  let fixture: ComponentFixture<OffresSimilairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffresSimilairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffresSimilairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
