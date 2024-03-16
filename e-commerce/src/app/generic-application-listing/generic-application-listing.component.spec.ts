import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericApplicationListingComponent } from './generic-application-listing.component';

describe('GenericApplicationListingComponent', () => {
  let component: GenericApplicationListingComponent;
  let fixture: ComponentFixture<GenericApplicationListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericApplicationListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericApplicationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
