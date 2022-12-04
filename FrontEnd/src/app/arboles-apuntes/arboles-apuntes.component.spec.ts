import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolesApuntesComponent } from './arboles-apuntes.component';

describe('ArbolesApuntesComponent', () => {
  let component: ArbolesApuntesComponent;
  let fixture: ComponentFixture<ArbolesApuntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolesApuntesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolesApuntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
