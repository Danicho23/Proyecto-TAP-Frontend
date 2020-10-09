import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaControlProductosComponent } from './lista-control-productos.component';

describe('ListaControlProductosComponent', () => {
  let component: ListaControlProductosComponent;
  let fixture: ComponentFixture<ListaControlProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaControlProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaControlProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
