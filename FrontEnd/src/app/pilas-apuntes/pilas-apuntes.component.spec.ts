import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilasApuntesComponent } from './pilas-apuntes.component';

describe('PilasApuntesComponent', () => {
  let component: PilasApuntesComponent;
  let fixture: ComponentFixture<PilasApuntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilasApuntesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilasApuntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
