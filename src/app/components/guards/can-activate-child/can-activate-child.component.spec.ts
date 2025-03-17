import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivateChildComponent } from './can-activate-child.component';

describe('CanActivateChildComponent', () => {
  let component: CanActivateChildComponent;
  let fixture: ComponentFixture<CanActivateChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanActivateChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanActivateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
