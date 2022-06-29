import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivatedLinksComponent } from './deactivated-links.component';

describe('DeactivatedLinksComponent', () => {
  let component: DeactivatedLinksComponent;
  let fixture: ComponentFixture<DeactivatedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivatedLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivatedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
