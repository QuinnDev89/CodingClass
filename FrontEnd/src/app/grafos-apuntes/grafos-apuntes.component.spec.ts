import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafosApuntesComponent } from './grafos-apuntes.component';

describe('GrafosApuntesComponent', () => {
  let component: GrafosApuntesComponent;
  let fixture: ComponentFixture<GrafosApuntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafosApuntesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafosApuntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
