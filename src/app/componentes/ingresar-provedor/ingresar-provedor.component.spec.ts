import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarProvedorComponent } from './ingresar-provedor.component';

describe('IngresarProvedorComponent', () => {
  let component: IngresarProvedorComponent;
  let fixture: ComponentFixture<IngresarProvedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarProvedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarProvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
