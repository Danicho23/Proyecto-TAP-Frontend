import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetalistallComponent } from './tarjetalistall.component';

describe('TarjetalistallComponent', () => {
  let component: TarjetalistallComponent;
  let fixture: ComponentFixture<TarjetalistallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetalistallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetalistallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
