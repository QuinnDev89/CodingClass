import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasApuntesComponent } from './listas-apuntes.component';

describe('ListasApuntesComponent', () => {
  let component: ListasApuntesComponent;
  let fixture: ComponentFixture<ListasApuntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasApuntesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasApuntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
