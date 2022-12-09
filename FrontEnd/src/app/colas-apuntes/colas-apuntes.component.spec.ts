import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColasApuntesComponent } from './colas-apuntes.component';

describe('ColasApuntesComponent', () => {
  let component: ColasApuntesComponent;
  let fixture: ComponentFixture<ColasApuntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColasApuntesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColasApuntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
