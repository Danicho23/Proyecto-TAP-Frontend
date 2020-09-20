import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallproductComponent } from './listallproduct.component';

describe('ListallproductComponent', () => {
  let component: ListallproductComponent;
  let fixture: ComponentFixture<ListallproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListallproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
