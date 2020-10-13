import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosProdcutosComponent } from './otros-prodcutos.component';

describe('OtrosProdcutosComponent', () => {
  let component: OtrosProdcutosComponent;
  let fixture: ComponentFixture<OtrosProdcutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosProdcutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosProdcutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
