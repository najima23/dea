import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeaComponent } from './dea.component';

describe('DeaComponent', () => {
  let component: DeaComponent;
  let fixture: ComponentFixture<DeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
